import React = require('react');
import componentHandler = require('mdl');
import Props = __React.Props;

import {AppHeader} from './app-header';
import {AppSideBar} from './app-side-bar';
import {AppFooter} from './app-footer';

import {HeaderModel} from '../models/header.model';
import {SideBarModel} from '../models/side-bar.model';

export class BaseTemplate extends React.Component<any, {}> {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    render() {
        var ContentComponent = this.props.content;

        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <AppHeader header={new HeaderModel()}></AppHeader>
                <AppSideBar sidebar={new SideBarModel()}></AppSideBar>

                <main className="mdl-layout__content">
                    <div className="page-content">
                        <ContentComponent></ContentComponent>
                    </div>
                </main>

                <AppFooter></AppFooter>
            </div>
        )
    }
}