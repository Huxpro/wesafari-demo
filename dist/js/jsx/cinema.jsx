/**
 *  Cinema.jsx
 *  影院
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
    API
) {
    'use strict'

    // Var
    var chartData = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ]

    var chartOptions = {

    };

    // Doughnut Chart
    var DoughnutChart = ReactChart.Doughnut;


    // Component
    var Cinema = React.createClass({
        render: function(){

            return (
                <div className=
                    {"contentViewWithFooter ci-scroller " + this.props.active}
                >
                    <DoughnutChart
                        data={chartData}
                        options={chartOptions}
                        width="300" height="200"/>
                    <ul className="scroller">
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                         <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>
                        <li> Hey 这里是影院 </li>

                    </ul>
                    <NavBar title="影院"   />

                </div>
            )
        },
        getInitialState: function(){
            return {
                // index of the movieList, control the MovieDetail view.
                activatedMovie: 0,
                isDetailOpen: false
            }
        },
        componentDidMount: function(){
            //if(this.props.isActive == "active"){
                this.initScroll();
            //}
        },
        componentDidUpdate: function(){
            //console.log("componentDidUpdate");
            if(this.props.isActive == "active"){
                this.enableScroll();
            }
        },
        enableScroll: function(){
            if(this.CIScroll){
                this.CIScroll.refresh();
                return;
            }
            this.initScroll();
        },
        initScroll: function(){
            //init IScroll
            this.CIScroll = new IScroll('.ci-scroller', {
                mouseWheel: true,
                bindToWrapper: true,
                preventDefault:  iScrollClick(),
                tap: iScrollClick(),
                click: iScrollClick(),
            });
            window.scroll = this.CIScroll

            function iScrollClick(){
                if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
                if (/Chrome/i.test(navigator.userAgent)) return (/Android/i.test(navigator.userAgent));
                if (/Silk/i.test(navigator.userAgent)) return false;
                if (/Android/i.test(navigator.userAgent))
                {
                  var s=navigator.userAgent.substr(navigator.userAgent.indexOf('Android')+8,3);
                  return parseFloat(s[0]+s[3]) < 44 ? false : true
                }
            }
        }
    })

    return Cinema;
 })
