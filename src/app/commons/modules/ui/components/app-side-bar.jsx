define([
    'react',
    'mdl'
], function (React, componentHandler) {
    var SideBarLink = React.createClass({
        render: function () {
            return <a className="mdl-navigation__link" href={this.props.link.href}>{this.props.link.title}</a>
        }
    });

    var AppSideBar = React.createClass({
        componentDidMount: function () {
            componentHandler.upgradeDom();
        },

        render: function () {
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
    });

    return AppSideBar;
});