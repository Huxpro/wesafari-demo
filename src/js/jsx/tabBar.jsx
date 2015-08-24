/**
 *  Tab Bar.jsx
 *  页面顶部 Tab Bar
 *
 */

 define(['React'], function(React){
     'use strict'

     var TabBar = React.createClass({
         render: function(){
            var _current = this.props.current;
            var _onClick = this.props.onTabClick;

            return (
                 <footer>
                    <div id={"btn-capture"}
                         className={"FAB"}
                         onClick={_onClick.bind(null, 1)}>
                        <i className={"icon-boxoffice current"}></i>拍照
                    </div>
                    <div id={"btn-video"}
                         className={"FAB"}
                         onClick={_onClick.bind(null, 2)}>
                        <i className={"icon-boxoffice current"}></i>录像
                    </div>
                    <div className={"btn-reset FAB"}
                         onClick={this.onResetClick}>
                        <i className={"icon-schedule current"}></i>重置
                    </div>
                </footer>
            )
        },
        onResetClick: function(){
            location.hash = "reset"
        }
     })

     return TabBar;
 })
