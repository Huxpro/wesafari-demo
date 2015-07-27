/**
 *  Schedule.jsx
 *  排期
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
    'datacenter',
    'commonTable',
    'movieDetail'
], function(
    React,
    Chart,
    ReactChart,
    IScroll,
    Router,
    NavBar,
    Util,
    DataCenter,
    CommonTable,
    MovieDetail
) {
    'use strict'

    // Const
    var BARCOLORS = [
        "b1d9a9","63c7d3","f5d96c","fad0b7","f69f99",
        "f38456","9bc6e7","888caa","5d6991","826fb2"
    ]

    // Chart Config
    Chart.defaults.global.responsive = true;

    var defaultChartData = [
        {
            // 0 can make size correct but render blank.
            value: 0,
            color:"#b1d9a9",
            highlight: "#FF5A5E",
            label: "加载中..."
        }
    ]

    var chartOptions = {
        animationEasing: "easeOutQuart",
        animationSteps: 60,
        segmentShowStroke : false
    };

    // Component - Doughnut Chart
    var DoughnutChart = ReactChart.Doughnut;

    // Component - Schedule
    var Schedule = React.createClass({
        render: function(){
            var _chartData;
            var _chart;

            // generate chartData if model ready, otherwise set default chart data.
            if(!this.state.model){
                _chartData = defaultChartData;
            }else{
                _chartData = this.generateChartData();
            }

            // Chart must only rendered in displayed container
            // Chart.js issue: https://github.com/nnnick/Chart.js/issues/1311
            if(this.props.active == 'active'){
                _chart = (
                    <DoughnutChart
                        data={_chartData}
                        options={chartOptions}
                        redraw
                        width="300" height="170"/>
                )
            }else{
                _chart = null
            }

            return (
                <div className=
                    {"contentViewWithFooter sc-scroller " + this.props.active}
                >
                    <ul className="scroller">
                        <div className="sc-chart">
                            {_chart}
                        </div>
                        <CommonTable
                            th2 = "场次"
                            th3 = "占比"
                            tr2_field = "showTimes"
                            tr3_field = "proportion"
                            color
                            movieList={this.state.model && this.state.model.movieSchedules}
                            onMovieItemClick={this.onMovieItemClick}
                        />
                    </ul>
                    <NavBar title="排片"   />
                    <input type="date" className="datePicker icon-calendar" value={Util.getTodayStr()} />
                </div>
            )
        },
        getInitialState: function(){
            return {
                model: null
            }
        },
        componentDidMount: function(){
            this.fetchData();
            this.initIScroll();
        },
        componentDidUpdate: function(){
            if(this.props.active == "active"){
                this.SCScroll.refresh();
            }
        },
        fetchData: function(){
            var self = this;
            var _params = {
                "paging": {
                    "page": 1,
                    "pageSize": 10
                },
                "movieFilter": {
                    "cityId": "0",
                    "scheduleDate": "2015-05-12 00:00:00",
                    "periodType": "1"
                }
            }

            DataCenter.SCModel.getData(_params, function(res){
                console.log('SCModel is ready:');
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
            return this.state.model.movieSchedules.map(function(movie, i){
                return {
                    value: movie.proportion,
                    label: movie.movieName,
                    color:  '#' + BARCOLORS[i]
                }
            })
        },
        initIScroll: function(){
            //init IScroll
            this.SCScroll = new IScroll('.sc-scroller', {
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

    return Schedule;
 })
