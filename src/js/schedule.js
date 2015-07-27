/**
 *  Schedule.jsx
 *  排期
 *
 */

'use strict';

define(['React', 'IScroll', 'Router', 'navBar', 'util', 'commonTable'], function (React, IScroll, Router, NavBar, Util, CommonTable) {
    'use strict';

    // Component - Schedule
    var Schedule = React.createClass({
        displayName: 'Schedule',

        render: function render() {

            // both Cordova-ready and Store correct
            if (this.props.store && window.cordova) {
                var appdir = cordova.file.dataDirectory;
                var _photos = this.props.store.map(function (img, i) {
                    return React.createElement(
                        'li',
                        { key: i },
                        React.createElement('img', { src: appdir + img })
                    );
                });
            } else {
                var _photos = React.createElement(
                    'li',
                    null,
                    ' 你还没有拍过照片哦... '
                );
            }

            return React.createElement(
                'div',
                { className: 'contentViewWithFooter sc-scroller ' + this.props.active
                },
                React.createElement(
                    'ul',
                    { className: 'scroller' },
                    React.createElement(
                        'ul',
                        { className: 'album' },
                        _photos
                    )
                ),
                React.createElement(NavBar, { title: '旅行者镜头' })
            );
        },
        getInitialState: function getInitialState() {
            return {
                model: []
            };
        },
        componentDidMount: function componentDidMount() {
            this.initIScroll();
        },
        componentDidUpdate: function componentDidUpdate() {
            this.SCScroll.refresh();
        },
        initIScroll: function initIScroll() {
            //init IScroll
            this.SCScroll = new IScroll('.sc-scroller', {
                mouseWheel: true,
                bindToWrapper: true,
                preventDefault: Util.iScrollClick(),
                tap: Util.iScrollClick(),
                click: Util.iScrollClick()
            });
        },
        onMovieItemClick: function onMovieItemClick(_index) {
            location.hash = '/movie-detail/' + _index;
        }
    });

    return Schedule;
});