import React = require('react');
import componentHandler = require('mdl');
import Props = __React.Props;

export class TodoList extends React.Component<Props<any>, {}> {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <div className="todo-card-wide mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title mdl-color-text--accent-contrast mdl-color--deep-orange-800">
                    <h2 className="mdl-card__title-text">Todo list</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sagittis pellentesque lacus eleifend lacinia...
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Get Started
                    </a>
                </div>
                <div className="mdl-card__menu">
                    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                        <i className="material-icons">share</i>
                    </button>
                </div>
            </div>
        );
    }
}