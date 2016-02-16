define([
    'react',
    'mdl',
    'jsx!./todo-list',
    'jsx!./calendar'
], function (React, componentHandler, TodoList, Calendar) {

    var HeaderLink = React.createClass({
        render: function () {
            return <a className="mdl-navigation__link" href={this.props.link.href}>{this.props.link.title}</a>
        }
    });

    var Home = React.createClass({
        componentDidMount: function () {
            componentHandler.upgradeDom();
        },

        render: function () {
            return (
                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--12-col-tablet mdl-cell--3-col-desktop">
                        <Calendar></Calendar>
                    </div>

                    <div className="mdl-cell mdl-cell--12-col-tablet mdl-cell--3-col-desktop">
                        <TodoList></TodoList>
                    </div>
                </div>
            );
        }
    });

    return Home;
});