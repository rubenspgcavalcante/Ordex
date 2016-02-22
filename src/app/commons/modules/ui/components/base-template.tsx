import React = require('react');
import componentHandler = require('mdl');
import Props = __React.Props;

import AppHeaderPack = require('./app-header');
import AppSideBarPack = require('./app-side-bar');
import AppFooterPack = require('./app-footer');

import HeaderModelPack = require('../models/header.model');
import SideBarModelPack = require('../models/side-bar.model');

var header = new HeaderModelPack.HeaderModel();
var sidebar = new SideBarModelPack.SideBarModel();

export class BaseTemplate extends React.Component<any, {}> {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <AppHeaderPack.AppHeader header={header}></AppHeaderPack.AppHeader>
                <AppSideBarPack.AppSideBar sidebar={sidebar}></AppSideBarPack.AppSideBar>

                <main className="mdl-layout__content">
                    <div className="page-content">
                        <this.props.content></this.props.content>
                    </div>
                </main>

                <AppFooterPack.AppFooter></AppFooterPack.AppFooter>
            </div>
        )
    }
}