define([
    'react',
    'mdl',

    './app-header',
    './app-side-bar',
    './app-footer',

    '../models/header.model',
    '../models/side-bar.model'
], function (React, componentHandler, AppHeader, AppSideBar, AppFooter, HeaderModelPack, SideBarModelPack) {

    /** @type HeaderModel */
    var header = new HeaderModelPack.HeaderModel();

    /** #type SideBarModel */
    var sidebar = new SideBarModelPack.SideBarModel();

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