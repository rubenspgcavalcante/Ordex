define([
    'react',
    'mdl',

    'jsx!./app-header',
    'jsx!./app-side-bar'
], function (React, componentHandler, AppHeader, AppSideBar) {

    /** @jsx React.DOM */
    var BaseTemplate = React.createClass({
        componentDidMount: function () {
            componentHandler.upgradeDom();
        },

        render: function () {
            return (
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <AppHeader header={this.props.header}></AppHeader>
                    <AppSideBar sidebar={this.props.sidebar}></AppSideBar>

                    <main className="mdl-layout__content">
                        <div className="page-content">
                            {this.props.content}
                        </div>
                    </main>
                </div>
            )
        }
    });

    return BaseTemplate;
});