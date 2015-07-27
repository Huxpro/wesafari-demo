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
    'boxOffice',
    'schedule',
    'cinema',
    'movieDetail',
    'datacenter',
    'FastClick'
], function(
    React,
    NavBar,
    TabBar,
    BoxOffice,
    Schedule,
    Cinema,
    MovieDetail,
    DataCenter,
    FastClick
) {
    'use strict';

    // 支持触摸事件
    //React.initializeTouchEvents(true);
    // FastClick iOS need
    FastClick.attach(document.body);
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    /**
     * @class Gandalf
     * The App
     */
    var Gandalf = React.createClass({
        render: function() {
            var _current = this.state.currentTabView;
            var Current;
            switch (_current) {
                case 0:
                    Current = Schedule; break;
                case 1:
                    Current = BoxOffice; break;
                case 2:
                    Current = Cinema; break;
                default:
                    Current = BoxOffice
            }

            return (
                <div className={this.state.standalone?"standalone":""}>
                    <Schedule  active={_current==0?"active":"cached"} />
                    <BoxOffice active={_current==1?"active":"cached"} ref={"current"} />
                    <Cinema    active={_current==2?"active":"cached"} />
                    <TabBar
                        current={this.state.currentTabView}
                        onTabClick={this.onTabClick}
                    />
                    <MovieDetail
                        movieId={1}
                        movieName={"detail"}
                        open={this.state.isDetailOpen}
                        backCallback={this.onBackBtnClick}
                    />
                </div>
            )
        },
        getInitialState: function(){
            return {
                currentTabView: 1,
                activatedMovie: 0,
                isDetailOpen: false,
                standalone: false
            }
        },
        componentDidMount: function(){
            this.isStandAlone();
            this.router();
        },
        router: function(){
            // Router
            var self = this;
            var router = Router({
                '/': this.setState.bind(this, {currentTabView: 1}),
                '/schedule': this.setState.bind(this, {currentTabView: 0}),
                '/boxoffice': this.setState.bind(this, {currentTabView: 1}),
                '/cinema': this.setState.bind(this, {currentTabView: 2}),
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
                '1': 'boxoffice',
                '2': 'cinema'
            }
            location.hash = _tabMap[_index];
        },
        onBackBtnClick: function(){
            window.history.back(1);
            this.setState({isDetailOpen: false});
        }
    })

    React.render(
        <Gandalf />,
        document.getElementById('app')
    )

});
