import CalendarPack = require('calendar');
import TodoListPack = require('todo-list');

import React = require('react');
import componentHandler = require('mdl');
import Props = __React.Props;

export class Home extends React.Component<Props<any>, {}> {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--12-col-tablet mdl-cell--3-col-desktop">
                    <CalendarPack.Calendar></CalendarPack.Calendar>
                </div>

                <div className="mdl-cell mdl-cell--12-col-tablet mdl-cell--3-col-desktop">
                    <TodoListPack.TodoList></TodoListPack.TodoList>
                </div>
            </div>
        );
    }
}