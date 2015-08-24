/**
 *  Box Office.jsx
 *  票房
 *
 */

define([
    'React',
    'Chart',
    'ReactChart',
    'IScroll',
    'Router',
    'navBar',
    'util',
    'commonTable',
    'movieDetail',
    'datacenter',
    '../mock/apiBoxOffice'
], function(
    React,
    Chart,
    ReactChart,
    IScroll,
    Router,
    NavBar,
    Util,
    CommonTable,
    MovieDetail,
    DataCenter,
    API
) {
    'use strict'


    // Model
    var BOModel = {
        getData: function(){
            return API;
        },
        getMovieList: function(){
            return this.getData().movieList;
        },
        getMovieByIndex: function(_index){
            return this.getMovieList()[_index];
        },
        getTheBigBoard: function(){
            return this.getData().theBigBoard;
        },
        getLabels: function(){
            var list = this.getMovieList(),
                labels = [];

            list.forEach(function(movie){
                //labels.push((movie.name).slice(0,2))
                labels.push(movie.name)
            });

            return labels;
        },
        getBoxOfficeToday: function(){
            var list = this.getMovieList(),
                data = [];

            list.forEach(function(movie){
                data.push(movie.boxOfficeToday);
            });

            return data;
        }
    }


    // Chart Config
    Chart.defaults.global.responsive = true;

    // Const
    var BARCOLORS = [
        "b1d9a9","63c7d3","f5d96c","fad0b7","f69f99",
        "f38456","9bc6e7","888caa","5d6991","826fb2"
    ]

    // Var
    var defaultChartData = {
        labels: BOModel.getLabels(),
        datasets: [
            {
                label: "Box office today",
                data: BOModel.getBoxOfficeToday(),
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
            }
        ]
    };

    var chartOptions = {
        showScale: true,
        scaleShowLabels: false,
        scaleLineColor: "rgba(0,0,0,0)",
        barShowStroke: false,
        scaleShowVerticalLines: false,
        barValueSpacing:9,
        hideXLabels: true
    };

    // Bar Chart
    var BarChart = ReactChart.Bar;

    // Component
    var BoxOffice = React.createClass({
        render: function(){

            return (
                <div className=
                    {"contentViewWithFooter bo-scroller " + this.props.active}
                >
                    <ul className="scroller">

                        <CommonTable
                            color
                            movieList={BOModel.getMovieList()}
                            onMovieItemClick={this.onMovieItemClick}
                        />
                    </ul>
                    <NavBar title="旅行者镜头"   />
                </div>
            )
        },
        getInitialState: function(){
            return {
                model: null
            }
        },
        componentDidMount: function(){
            //this.fetchData();
            //this.setBarColor();
            this.initIScroll();
        },
        componentDidUpdate: function(){
            if(this.props.active == "active"){
                this.BOScroll.refresh();
                this.setBarColor();
            }
        },
        setBarColor: function(){

            // use refs to get real chart-object
            var _chart = this.refs.BoxOfficeChart.getChart();
            //window.c = _chart;

            // manually set color for each bar
            // http://stackoverflow.com/questions/25594478/different-color-for-each-bar-in-a-bar-chart-chartjs
            var bars = _chart.datasets[0].bars;

            for (var i = bars.length - 1; i >= 0; i--) {
                // 防止溢出，自动循环一次
                if(i > BARCOLORS.length -1 ){
                    bars[i].fillColor = "#"+BARCOLORS[i-BARCOLORS.length];
                }else{
                    bars[i].fillColor = "#"+BARCOLORS[i];
                }
            };
            _chart.update();
        },
        fetchData: function(){
            var self = this;
            var _params = {
                "paging": {
                    "page": 1,
                    "pageSize": 10
                },
                "movieFilter": {
                    "scheduleDate": "2015-05-13 00:00:00"
                }
            }

            DataCenter.BOModel.getData(_params, function(res){
                console.log('BOModel is ready:');
                console.log(res);

                // re-render
                self.setState({
                    model: res
                })
            },function(err){
                console.log(err);
            })
        },
        generateChartData: function(){
            var _labels = this.state.model.movieBoxOffices.map(function(movie, i){
                return movie.movieName;
            })
            var _data = this.state.model.movieBoxOffices.map(function(movie, i){
                return movie.boxOffice;
            })

            return {
                labels: _labels,
                datasets: [
                    {
                        label: "MDBO",
                        data: _data,
                        fillColor: "rgba(220,220,220,0.5)",
                        strokeColor: "rgba(220,220,220,0.8)",
                        highlightFill: "rgba(220,220,220,0.75)",
                        highlightStroke: "rgba(220,220,220,1)"
                    }
                ]
            };
        },
        initIScroll: function(){
            //init IScroll
            this.BOScroll = new IScroll('.bo-scroller', {
                mouseWheel: true,
                bindToWrapper: true,
                preventDefault:  Util.iScrollClick(),
                tap: Util.iScrollClick(),
                click: Util.iScrollClick(),
            });
        },
        onMovieItemClick: function(_index){
            location.hash = '/movie-detail/'+_index;
        }
    })

    return BoxOffice;
 })
