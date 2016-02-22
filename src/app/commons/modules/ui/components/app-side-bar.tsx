import React = require('react');
import componentHandler = require('mdl');
import Props = __React.Props;

class SideBarLink extends React.Component<any, {}> {
    render() {
        return <a className="mdl-navigation__link" href={this.props.link.href}>{this.props.link.title}</a>
    }
}

export class AppSideBar extends React.Component<any, {}> {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">{this.props.sidebar.get('title')}</span>
                <nav className="mdl-navigation">

                    {this.props.sidebar.get('links').map(function (link) {
                        return <SideBarLink key={link.href} link={link}></SideBarLink>
                        })}

                </nav>
            </div>
        )
    }
}