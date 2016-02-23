import React = require('react');
import componentHandler = require('mdl');
import Props = __React.Props;

import {Calendar} from './calendar';
import {TodoList} from './todo-list';

export class Home extends React.Component<Props<any>, {}> {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
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
}