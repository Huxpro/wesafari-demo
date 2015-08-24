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
    'util'
], function(
    React,
    IScroll,
    Router,
    NavBar,
    Util
) {
    'use strict'

    // Component - Schedule
    var Schedule = React.createClass({
        render: function(){

            var appdir;
            // both Cordova-ready and Store correct
            if(this.props.store){
                var _photos = this.props.store.map(function(img, i){
                    // if cordova, reset every loop.
                    if(window.cordova){
                        appdir = cordova.file.dataDirectory;
                    }
                    // came from local
                    if(img.match('res')){
                        appdir = "";
                    }

                    // if video, early return
                    if(img.match('mp4') || img.match('MOV')){
                        return (
                            <li key={i}>
                                <video
                                    src={appdir + img}
                                    type='video/mp4'
                                    poster = "res/default.jpg"
                                    controls="controls">
                                </video>
                            </li>
                        )
                    }

                    // default img
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
                    {"contentView sc-scroller " + this.props.active}
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
            var self = this;
            setTimeout(function(){
                self.SCScroll.refresh();
            },100)
            setTimeout(function(){
                self.SCScroll.refresh();
            },300)
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
            window.scroll = this.SCScroll;
        }
    })

    return Schedule;
 })
