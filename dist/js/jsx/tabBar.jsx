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
                        <i className={"icon-schedule "+ (_current==0?"current":"")}></i>排片
                    </div>
                    <div className={ _current==1?"current":"" } onClick={_onClick.bind(null, 1)}>
                        <i className={"icon-boxoffice "+(_current==1?"current":"")}></i>票房
                    </div>
                    <div className={ _current==2?"current":"" } onClick={_onClick.bind(null, 2)}>
                        <i className={"icon-cinema " +  (_current==2?"current":"")}></i>影院
                    </div>
                </footer>
            )
         }
     })

     return TabBar;
 })
