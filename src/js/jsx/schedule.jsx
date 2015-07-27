/**
 *  Schedule.jsx
 *  排期
 *
 */

define([
    'React',
    'IScroll',
    'Router',
    'navBar',
    'util',
    'commonTable'
], function(
    React,
    IScroll,
    Router,
    NavBar,
    Util,
    CommonTable
) {
    'use strict'

    // Component - Schedule
    var Schedule = React.createClass({
        render: function(){

            // both Cordova-ready and Store correct
            if(this.props.store && window.cordova){
                var appdir = cordova.file.dataDirectory;
                var _photos = this.props.store.map(function(img, i){
                    return (
                        <li key={i}>
                            <img src={appdir + img} />
                        </li>
                    )
                })
            }else{
                var _photos =  (
                    <li> 你还没有拍过照片哦... </li>
                )
            }

            return (
                <div className=
                    {"contentViewWithFooter sc-scroller " + this.props.active}
                >
                    <ul className="scroller">
                        <ul className="album">
                            {_photos}
                        </ul>
                    </ul>
                    <NavBar title="旅行者镜头"   />
                </div>
            )
        },
        getInitialState: function(){
            return {
                model: []
            }
        },
        componentDidMount: function(){
            this.initIScroll();
        },
        componentDidUpdate: function(){
            this.SCScroll.refresh();
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
