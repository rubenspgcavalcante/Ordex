define([
    'react',
    'mdl',

    'jsx!./app-header',
    'jsx!./app-side-bar',
    'jsx!./app-footer',

    '../models/header.model',
    '../models/side-bar.model'
], function (React, componentHandler, AppHeader, AppSideBar, AppFooter, HeaderModel, SideBarModel) {

    /** @type HeaderModel */
    var header = new HeaderModel();

    /** #type SideBarModel */
    var sidebar = new SideBarModel();


    /** @jsx React.DOM */
    var BaseTemplate = React.createClass({
        componentDidMount: function () {
            componentHandler.upgradeDom();
        },

        render: function () {
            return (
                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <AppHeader header={header}></AppHeader>
                    <AppSideBar sidebar={sidebar}></AppSideBar>

                    <main className="mdl-layout__content">
                        <div className="page-content">
                            <this.props.content></this.props.content>
                        </div>
                    </main>

                    <AppFooter></AppFooter>
                </div>
            )
        }
    });

    return BaseTemplate;
});