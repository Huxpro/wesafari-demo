/**
 *  App.jsx
 *  入口文件，处理依赖与顶层组件
 *
 */

"use strict";

require.config({
    paths: {
        React: "lib/react-with-addons",
        FastClick: "http://cdn.bootcss.com/fastclick/1.0.3/fastclick.min",
        Chart: "lib/Chart",
        IScroll: "lib/iscroll",
        Router: "lib/director"
    },
    shim: {
        "IScroll": {
            exports: "IScroll"
        },
        "Router": {
            exports: "Router"
        }
    },
    packages: [{
        name: "ReactChart",
        location: "lib/react-chart",
        main: "index"
    }]
});

require(["React", "navBar", "tabBar", "schedule", "FastClick", "store", "hybrid"], function (React, NavBar, TabBar, Schedule, FastClick, StoreVar, Hybrid) {
    "use strict";

    // 支持触摸事件
    //React.initializeTouchEvents(true);
    // FastClick iOS need
    FastClick.attach(document.body);
    document.addEventListener("touchmove", function (e) {
        e.preventDefault();
    }, false);

    /**
     * @class App
     * The App
     */
    var App = React.createClass({
        displayName: "App",

        render: function render() {
            var _current = this.state.currentTabView;
            var Current;
            switch (_current) {
                case 0:
                    Current = Schedule;break;
            }

            return React.createElement(
                "div",
                { className: this.state.standalone ? "standalone" : "" },
                React.createElement(Schedule, { store: this.state.store, ref: "current" }),
                React.createElement(TabBar, {
                    current: this.state.currentTabView,
                    onTabClick: this.onTabClick
                })
            );
        },
        getInitialState: function getInitialState() {
            return {
                currentTabView: 0,
                activatedMovie: 0,
                isDetailOpen: false,
                standalone: false,
                store: window.Store.fetch()
            };
        },
        componentDidMount: function componentDidMount() {
            this.isStandAlone();
            this.router();
            this.initHybrid();
        },
        router: function router() {
            // Router
            var self = this;
            var router = Router({
                "/": this.reRender,
                "/reset": this.onReset,
                "/schedule": this.setState.bind(this, { currentTabView: 0 }),
                "/camera": this.takePhoto,
                "/video": this.takeVideo,
                "/movie-detail": {
                    "/:index": {
                        on: function on(index) {
                            self.setState({
                                activatedMovie: index,
                                isDetailOpen: true
                            });
                        }
                    }
                }
            });
            router.init("/");
        },
        isStandAlone: function isStandAlone() {
            var _isIPhone = navigator.userAgent.indexOf("iPhone") != -1;
            var _isStandalone = window.navigator.standalone == true;
            var _isBrowser = document.URL.match(/^https?:/);

            if (!_isBrowser) {
                this.setState({
                    standalone: true
                });
                return;
            }
            if (_isIPhone && _isStandalone) {
                this.setState({
                    standalone: true
                });
            }
        },
        onTabClick: function onTabClick(_index) {
            var _tabMap = {
                "0": "schedule",
                "1": "camera",
                "2": "video"
            };
            location.hash = _tabMap[_index];
        },
        onReset: function onReset() {
            console.log("hello");
            var _store = ["res/5.mp4", "res/6.mp4", "res/7.mp4", "res/1.jpg", "res/2.jpg", "res/3.jpg", "res/4.jpg"];

            window.Store.save(_store);
            this.setState({
                store: _store
            });
        },
        onBackBtnClick: function onBackBtnClick() {
            window.history.back(1);
            this.setState({ isDetailOpen: false });
        },
        initHybrid: function initHybrid() {
            document.addEventListener("deviceready", Hybrid.init, false);
        },
        takePhoto: function takePhoto() {},
        reRender: function reRender() {
            console.log("rerender");
            this.setState({
                store: window.Store.fetch()
            });
        }
    });

    React.render(React.createElement(App, null), document.getElementById("app"));
});

//Hybrid.takePhotoAndSave();