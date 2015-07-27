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
                    { className: _current == 0 ? 'current' : '', onClick: _onClick.bind(null, 0) },
                    React.createElement('i', { className: 'icon-schedule ' + (_current == 0 ? 'current' : '') }),
                    '镜头'
                ),
                React.createElement(
                    'div',
                    { id: 'btn-capture',
                        className: 'FAB',
                        onClick: _onClick.bind(null, 1) },
                    React.createElement('i', { className: 'icon-boxoffice current' }),
                    '拍照'
                )
            );
        }
    });

    return TabBar;
});