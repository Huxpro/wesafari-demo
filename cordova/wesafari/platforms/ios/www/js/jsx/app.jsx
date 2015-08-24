/**
 *  App.jsx
 *  入口文件，处理依赖与顶层组件
 *
 */

require.config({
    paths: {
        React : "lib/react-with-addons",
        FastClick: "http://cdn.bootcss.com/fastclick/1.0.3/fastclick.min",
        Chart: "lib/Chart",
        IScroll: "lib/iscroll",
        Router: "lib/director"
    },
    shim: {
        'IScroll': {
            exports: "IScroll"
        },
        'Router': {
            exports: "Router"
        }
    },
    packages: [
        {
            name: "ReactChart",
            location: "lib/react-chart",
            main: "index"
        }
    ]
})


require([
    'React',
    'navBar',
    'tabBar',
    'schedule',
    'FastClick',
    'store',
    'hybrid'
], function(
    React,
    NavBar,
    TabBar,
    Schedule,
    FastClick,
    StoreVar,
    Hybrid
) {
    'use strict';

    // 支持触摸事件
    //React.initializeTouchEvents(true);
    // FastClick iOS need
    FastClick.attach(document.body);
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

    /**
     * @class App
     * The App
     */
    var App = React.createClass({
        render: function() {
            var _current = this.state.currentTabView;
            var Current;
            switch (_current) {
                case 0:
                    Current = Schedule; break;
            }

            return (
                <div className={this.state.standalone?"standalone":""}>
                    <Schedule store={this.state.store} ref={"current"}  />
                    <TabBar
                        current={this.state.currentTabView}
                        onTabClick={this.onTabClick}
                    />
                </div>
            )
        },
        getInitialState: function(){
            return {
                currentTabView: 0,
                activatedMovie: 0,
                isDetailOpen: false,
                standalone: false,
                store: window.Store.fetch()
            }
        },
        componentDidMount: function(){
            this.isStandAlone();
            this.router();
            this.initHybrid();
        },
        router: function(){
            // Router
            var self = this;
            var router = Router({
                '/': this.reRender,
                '/reset': this.onReset,
                '/schedule': this.setState.bind(this, {currentTabView: 0}),
                '/camera': this.takePhoto,
                '/video': this.takeVideo,
                '/movie-detail': {
                    '/:index': {
                        on: function(index){
                            self.setState({
                                activatedMovie: index,
                                isDetailOpen: true
                            })
                        }
                    }
                }
            });
            router.init('/');
        },
        isStandAlone: function(){
            var _isIPhone = navigator.userAgent.indexOf('iPhone') != -1;
            var _isStandalone = window.navigator.standalone == true;
            var _isBrowser = document.URL.match(/^https?:/);

            if(!_isBrowser){
                this.setState({
                    standalone: true
                })
                return;
            }
            if( _isIPhone && _isStandalone  ){
                this.setState({
                    standalone: true
                })
            }
        },
        onTabClick: function(_index){
            var _tabMap = {
                '0': 'schedule',
                '1': 'camera',
                '2': 'video'
            }
            location.hash = _tabMap[_index];
        },
        onReset: function(){
            console.log("hello");
            var _store = [
                "res/5.mp4",
                "res/6.mp4",
                "res/7.mp4",
                "res/1.jpg",
                "res/2.jpg",
                "res/3.jpg",
                "res/4.jpg"
            ]

            window.Store.save(_store);
            this.setState({
                store: _store
            })

        },
        onBackBtnClick: function(){
            window.history.back(1);
            this.setState({isDetailOpen: false});
        },
        initHybrid: function(){
            document.addEventListener("deviceready", Hybrid.init, false);
        },
        takePhoto: function(){
            //Hybrid.takePhotoAndSave();
        },
        reRender: function(){
            console.log('rerender');
            this.setState({
                store: window.Store.fetch()
            })
        }
    })

    React.render(
        <App />,
        document.getElementById('app')
    )

});
