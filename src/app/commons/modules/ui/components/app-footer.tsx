import React = require('react');
import componentHandler = require('mdl');
import Props = __React.Props;

export class AppFooter extends React.Component<Props<any>, {}> {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <footer className="mdl-mini-footer">
                <div className="mdl-mini-footer__left-section">
                    <div className="mdl-logo">Title</div>
                    <ul className="mdl-mini-footer__link-list">
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">Privacy and Terms</a>
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}
