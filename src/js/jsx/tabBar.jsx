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
                    <div className={ _current==0?"current":"" } onClick={_onClick.bind(null, 0)}>
                        <i className={"icon-schedule "+ (_current==0?"current":"")}></i>镜头
                    </div>
                    <div id={"btn-capture"}
                         className={"FAB"}
                         onClick={_onClick.bind(null, 1)}>
                        <i className={"icon-boxoffice current"}></i>拍照
                    </div>

                </footer>
            )
         }
     })

     return TabBar;
 })
