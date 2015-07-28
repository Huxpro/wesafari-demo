/**
 *  Tab Bar.jsx
 *  页面顶部 Tab Bar
 *
 */

'use strict';

define(['React'], function (React) {
    'use strict';

    var TabBar = React.createClass({
        displayName: 'TabBar',

        render: function render() {
            var _current = this.props.current;
            var _onClick = this.props.onTabClick;

            return React.createElement(
                'footer',
                null,
                React.createElement(
                    'div',
                    { id: 'btn-capture',
                        className: 'FAB',
                        onClick: _onClick.bind(null, 1) },
                    React.createElement('i', { className: 'icon-boxoffice current' }),
                    '拍照'
                ),
                React.createElement(
                    'div',
                    { className: 'btn-reset FAB',
                        onClick: this.onResetClick },
                    React.createElement('i', { className: 'icon-schedule current' }),
                    '重置'
                )
            );
        },
        onResetClick: function onResetClick() {
            location.hash = 'reset';
        }
    });

    return TabBar;
});