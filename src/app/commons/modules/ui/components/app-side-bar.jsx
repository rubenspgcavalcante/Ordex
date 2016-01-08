define([
    'react',
    'mdl',
    'underscore'
], function (React, componentHandler, _) {

    var SideBarLink = React.createClass({
        render: function () {
            return <a className="mdl-navigation__link" href={this.props.name}>{this.props.name}</a>
        }
    });

    /** @jsx React.DOM */
    var AppSideBar = React.createClass({
        componentDidMount: function () {
            componentHandler.upgradeDom();
        },

        render: function () {
            return (
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">{this.props.sidebar.title}</span>
                    <nav className="mdl-navigation">

                        {this.props.sidebar.links.map(function (link) {
                            return <SideBarLink key={link} name={link}></SideBarLink>
                        })}

                    </nav>
                </div>
            )
        }
    });

    return AppSideBar;
});