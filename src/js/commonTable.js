/**
 *  CommonTable.jsx
 *  通用列表组件
 *
 */

'use strict';

define(['React', 'util'], function (React, Util) {
    'use strict';

    // Const
    var BARCOLORS = ['b1d9a9', '63c7d3', 'f5d96c', 'fad0b7', 'f69f99', 'f38456', '9bc6e7', '888caa', '5d6991', '826fb2'];

    // Component
    var CommonTable = React.createClass({
        displayName: 'CommonTable',

        render: function render() {
            var self = this;

            if (this.props.movieList) {
                var _movieItems = this.props.movieList.map(function (movie, i) {
                    return React.createElement(
                        'li',
                        { key: i },
                        React.createElement(
                            'span',
                            { className: 'name' },
                            _color,
                            _tr1
                        ),
                        React.createElement(
                            'span',
                            { className: 'today' },
                            Util.getFormattedNum(movie[self.props.tr2_field])
                        ),
                        React.createElement(
                            'span',
                            { className: 'total' },
                            Util.getFormattedNum(movie[self.props.tr3_field])
                        )
                    );
                });
            } else {
                var _movieItems = React.createElement(
                    'li',
                    null,
                    ' 加载中... '
                );
            }

            return React.createElement(
                'div',
                { className: 'bo-table' },
                React.createElement(
                    'div',
                    { className: 'table-header' },
                    React.createElement(
                        'span',
                        { className: 'name' },
                        this.props.th1
                    ),
                    React.createElement(
                        'span',
                        { className: 'today' },
                        this.props.th2
                    ),
                    React.createElement(
                        'span',
                        { className: 'total' },
                        this.props.th3
                    )
                ),
                React.createElement(
                    'ul',
                    null,
                    _movieItems
                )
            );
        },
        handleClick: function handleClick(i) {
            if (this.props.onMovieItemClick) {
                this.props.onMovieItemClick(i);
            }
        },
        getDefaultProps: function getDefaultProps() {
            return {
                tr1_field: 'movieName',
                tr2_field: 'boxOfficeToday',
                tr3_field: 'boxOfficeTotal',
                th1: '片名',
                th2: '票房(万)',
                th3: '累计(万)'
            };
        }
    });

    return CommonTable;
});