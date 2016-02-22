import React = require('react');
import componentHandler = require('mdl');
import Props = __React.Props;

class HeaderLink extends React.Component<any, {}> {
    render() {
        return <a className="mdl-navigation__link" href={this.props.link.href}>{this.props.link.title}</a>
    }
}

export class AppHeader extends React.Component<any, {}> {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">{this.props.header.get('title')}</span>
                    <div className="mdl-layout-spacer"></div>
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        {this.props.header.get('links').map(function (link) {
                            return <HeaderLink key={link.href} link={link}></HeaderLink>
                            })}
                    </nav>
                </div>
            </header>
        );
    }
}