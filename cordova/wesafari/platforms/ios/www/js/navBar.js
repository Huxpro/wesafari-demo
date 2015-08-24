/**
 *  Nav Bar.jsx
 *  页面头部 Navigation Bar
 *
 */

'use strict';

define(['React'], function (React) {
    'use strict';

    var NavBar = React.createClass({
        displayName: 'NavBar',

        render: function render() {
            var leftNav = this.props.leftNav && React.createElement(
                'span',
                {
                    className: 'ico-back',
                    onClick: this.props.backCallback },
                this.props.leftNav
            );

            return React.createElement(
                'header',
                null,
                leftNav,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                )
            );
        }

    });

    return NavBar;
});