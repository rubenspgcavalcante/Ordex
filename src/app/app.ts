/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../globals.d.ts"/>

import Backbone = require('backbone');

import HomeModule = require('./home/home');
import Module = require('./core/module')

class App {
    constructor() {
        Backbone.history.start();
        var Home = new HomeModule.Home();
    }
}

new App();