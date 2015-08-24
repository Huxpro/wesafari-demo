/**
 *  Nav Bar.jsx
 *  页面头部 Navigation Bar
 *
 */

define(['React'], function(React){
    'use strict'

    var NavBar = React.createClass({
        render: function(){
            var leftNav = 
                this.props.leftNav && 
                <span 
                    className="ico-back" 
                    onClick={this.props.backCallback}>
                    {this.props.leftNav}
                </span>

            return (
                <header>
                    {leftNav}
                    <h1 >{this.props.title}</h1>
                </header>
            )
         },
        
     })

     return NavBar;
 })
