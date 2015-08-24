/**
 *  Cinema.jsx
 *  影院
 *
 */

'use strict';

define(['React', 'Chart', 'ReactChart', 'IScroll', 'Router', 'navBar', 'util', 'commonTable', 'movieDetail', '../mock/apiBoxOffice'], function (React, Chart, ReactChart, IScroll, Router, NavBar, Util, CommonTable, MovieDetail, API) {
    'use strict';

    // Component
    var Cinema = React.createClass({
        displayName: 'Cinema',

        render: function render() {

            return React.createElement(
                'div',
                { className: 'contentViewWithFooter ci-scroller ' + this.props.active
                },
                React.createElement(
                    'ul',
                    { className: 'scroller' },
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    ),
                    React.createElement(
                        'li',
                        null,
                        ' Hey 这里是影院 '
                    )
                ),
                React.createElement(NavBar, { title: '发现' })
            );
        },
        getInitialState: function getInitialState() {
            return {
                // index of the movieList, control the MovieDetail view.
                activatedMovie: 0,
                isDetailOpen: false
            };
        },
        componentDidMount: function componentDidMount() {},
        componentDidUpdate: function componentDidUpdate() {
            //console.log("componentDidUpdate");
            if (this.props.isActive == 'active') {
                this.enableScroll();
            }
        },
        enableScroll: function enableScroll() {
            if (this.CIScroll) {
                this.CIScroll.refresh();
                return;
            }
            this.initScroll();
        },
        initScroll: function initScroll() {
            //init IScroll
            this.CIScroll = new IScroll('.ci-scroller', {
                mouseWheel: true,
                bindToWrapper: true,
                preventDefault: iScrollClick(),
                tap: iScrollClick(),
                click: iScrollClick()
            });
            window.scroll = this.CIScroll;

            function iScrollClick() {
                if (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent)) return false;
                if (/Chrome/i.test(navigator.userAgent)) return /Android/i.test(navigator.userAgent);
                if (/Silk/i.test(navigator.userAgent)) return false;
                if (/Android/i.test(navigator.userAgent)) {
                    var s = navigator.userAgent.substr(navigator.userAgent.indexOf('Android') + 8, 3);
                    return parseFloat(s[0] + s[3]) < 44 ? false : true;
                }
            }
        }
    });

    return Cinema;
});

//if(this.props.isActive == "active"){
//this.initScroll();
//}