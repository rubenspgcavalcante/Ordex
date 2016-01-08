define(['react', 'mdl'], function (React, componentHandler) {

    var HeaderLink = React.createClass({
        render: function () {
            return <a className="mdl-navigation__link" href={this.props.link}>{this.props.link}</a>
        }
    });

    /** @jsx React.DOM */
    var AppHeader = React.createClass({
        componentDidMount: function () {
            componentHandler.upgradeDom();
        },

        render: function () {
            return (
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">{this.props.header.title}</span>
                        <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            {this.props.header.links.map(function (link) {
                                return <HeaderLink key={link} link={link}></HeaderLink>
                            })}
                        </nav>
                    </div>
                </header>
            )
        }
    });

    return AppHeader;
});