/**
 *  Movie Detail.jsx
 *  电影详情 —— 包含 排片/票房
 *
 */

'use strict';

define(['React', 'Chart', 'ReactChart', 'IScroll', 'navBar', 'commonTable', 'util', 'datacenter'], function (React, Chart, ReactChart, IScroll, NavBar, CommonTable, Util, DataCenter) {
    'use strict';

    // Movie Detail Box Offie Model
    var MDBOModel = {
        getData: function getData() {
            return API;
        },
        getMovieName: function getMovieName() {
            return API.name;
        },
        getDateList: function getDateList() {
            return this.getData().dateList;
        },
        getLabels: function getLabels() {
            var list = this.getDateList(),
                labels = [];

            list.forEach(function (date) {
                var _label = Util.getChineseDateStr(date.date) + ' ' + Util.getDay(date.date);

                labels.push(_label);
            });

            return labels;
        },
        getBoxOfficeToday: function getBoxOfficeToday() {
            var list = this.getDateList(),
                data = [];

            list.forEach(function (date) {
                data.push(date.boxOfficeToday);
            });

            return data;
        }
    };

    // Chart Config
    Chart.defaults.global.responsive = true;

    // Var
    var defaultChartData = {
        labels: [''],
        datasets: [{
            label: 'MDBO',
            data: [0],
            fillColor: '#d7f0f5',
            strokeColor: '#5fc7d4',
            highlightFill: '#a0dde4',
            highlightStroke: '#3caab7'
        }]
    };

    var chartOptions = {
        showScale: true,
        scaleShowLabels: true,
        scaleLineColor: 'rgba(0,0,0,0.05)',
        //barShowStroke: false,
        barStrokeWidth: 1,
        scaleShowVerticalLines: true,
        barValueSpacing: 2,
        hideXLabels: true
    };

    // Bar Chart
    var BarChart = ReactChart.Bar;

    // Component
    var MovieDetail = React.createClass({
        displayName: 'MovieDetail',

        render: function render() {
            var _isOpen = this.props.open ? 'open' : '';

            // generate chartData if model ready, otherwise set default chart data.
            var _chartData;
            if (!this.state.model) {
                _chartData = defaultChartData;
            } else {
                _chartData = this.generateChartData();
            }

            // <Chart />
            var _chart;
            if (this.state.model) {
                _chart = React.createElement(BarChart, {
                    data: _chartData,
                    options: chartOptions,
                    ref: 'BoxOfficeChart',
                    width: '300', height: '200' });
            } else {
                _chart = null;
            }

            return React.createElement(
                'div',
                { className: 'movie-detail ' + _isOpen },
                React.createElement(NavBar, {
                    title: this.props.movieName,
                    leftNav: 'Back',
                    backCallback: this.props.backCallback
                }),
                React.createElement('input', { type: 'date', className: 'datePicker icon-calendar', value: Util.getTodayStr() }),
                React.createElement(
                    'div',
                    { className: 'contentView md-scroller' },
                    React.createElement(
                        'ul',
                        { className: 'scroller' },
                        React.createElement(
                            'div',
                            { className: 'chart' },
                            _chart
                        ),
                        React.createElement(CommonTable, {
                            tr1_field: 'scheduleDate',
                            tr2_field: 'boxOffice',
                            tr3_field: 'totalBoxOffice',
                            helper: Util.getChineseDateStrWithDay,
                            th1: '日期',
                            movieList: this.state.model && this.state.model.movieBoxOffices
                        })
                    )
                )
            );
        },
        getInitialState: function getInitialState() {
            return {
                movieId: 0,
                model: null
            };
        },
        componentDidMount: function componentDidMount() {
            this.fetchData();
            this.initIScroll();
        },
        componentWillUpdate: function componentWillUpdate() {
            var _isOpen = this.props.open ? 'open' : '';

            if (!_isOpen && this.MDScroll) {
                this.MDScroll.scrollTo(0, 0);
            }
        },
        componentDidUpdate: function componentDidUpdate() {
            if (this.props.open) {
                this.MDScroll.refresh();
            }
        },
        fetchData: function fetchData() {
            var self = this;
            var _params = {
                'paging': {
                    'page': 1,
                    'pageSize': 10
                },
                'movieFilter': {
                    'movieId': '1'
                }
            };

            DataCenter.MDBOModel.getData(_params, function (res) {
                console.log('MDBOModel is ready:');
                console.log(res);

                // re-render
                self.setState({
                    model: res
                });
            }, function (err) {
                console.log(err);
            });
        },
        generateChartData: function generateChartData() {
            var _labels = this.state.model.movieBoxOffices.map(function (movie, i) {
                return movie.movieName;
            });
            var _data = this.state.model.movieBoxOffices.map(function (movie, i) {
                return movie.boxOffice;
            });

            return {
                labels: _labels,
                datasets: [{
                    label: 'MDBO',
                    data: _data,
                    fillColor: '#d7f0f5',
                    strokeColor: '#5fc7d4',
                    highlightFill: '#a0dde4',
                    highlightStroke: '#3caab7'
                }]
            };
        },
        initIScroll: function initIScroll() {
            // init IScroll
            this.MDScroll = new IScroll('.md-scroller', {
                mouseWheel: true,
                bindToWrapper: true,
                preventDefault: iScrollClick(),
                tap: iScrollClick(),
                click: iScrollClick()
            });
            window.scroll2 = this.MDScroll;
            function iScrollClick() {
                if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
                if (/Chrome/i.test(navigator.userAgent)) return /Android/i.test(navigator.userAgent);
                if (/Silk/i.test(navigator.userAgent)) return false;
                if (/Android/i.test(navigator.userAgent)) {
                    var s = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3);
                    return parseFloat(s[0] + s[3]) < 44 ? false : true;
                }
            }
        }

    });

    return MovieDetail;
});