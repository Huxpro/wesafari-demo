/**
 *  CommonTable.jsx
 *  通用列表组件
 *
 */

define([
    'React',
    'util'
], function(
    React,
    Util
) {
    'use strict'

    // Const
    var BARCOLORS = [
        "b1d9a9","63c7d3","f5d96c","fad0b7","f69f99",
        "f38456","9bc6e7","888caa","5d6991","826fb2"
    ]

    // Component
    var CommonTable = React.createClass({
        render: function(){
            var _needColor = (this.props.color)? true : false;
            var _needHelper = (this.props.helper)? true : false;

            var _tr1_field = this.props.tr1_field;
            var _helper = this.props.helper;
            var _handleClick = this.handleClick;
            var _color = "";

            var self = this;

            if(this.props.movieList){
                var _movieItems = this.props.movieList.map(function(movie, i){

                    if(_needColor){
                        var _barColor={
                            backgroundColor: '#' + BARCOLORS[i]
                        }
                        _color = <i style={_barColor}/>
                    }

                    var _tr1 = movie[self.props.tr1_field];
                    if(_needHelper){
                        _tr1 = _helper(_tr1);
                    }

                    return (
                        <li key={i}
                            onClick={_handleClick.bind(null, i)}
                        >
                            <span className="name" >
                                {_color}
                                {_tr1}
                            </span>
                            <span className="today" >
                                {Util.getFormattedNum(movie[self.props.tr2_field])}
                            </span>
                            <span className="total" >
                                {Util.getFormattedNum(movie[self.props.tr3_field])}
                            </span>
                        </li>
                    )
                })
            }else{
                var _movieItems =  (
                    <li> 加载中... </li>
                )
            }

            return (
                <div className="bo-table">
                    <div className="table-header">
                        <span className="name" >{this.props.th1}</span>
                        <span className="today">{this.props.th2}</span>
                        <span className="total">{this.props.th3}</span>
                    </div>
                    <ul>
                        {_movieItems}
                    </ul>
                </div>
            )
        },
        handleClick: function(i){
            if(this.props.onMovieItemClick){
                this.props.onMovieItemClick(i);
            }

        },
        getDefaultProps: function(){
            return {
                tr1_field: "movieName",
                tr2_field: "boxOfficeToday",
                tr3_field: "boxOfficeTotal",
                th1: "片名",
                th2: "票房(万)",
                th3: "累计(万)"
            }
        }
    })

    return CommonTable;
 })
