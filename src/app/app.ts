/// <reference path="../../typings/tsd.d.ts"/>
/// <reference path="../../globals.d.ts"/>

import Backbone = require('backbone');

import {Autowired} from './core/module';
import {Home} from './home/home';

class App {

    @Autowired(Home)
    public home:Home;

    constructor() {
        Backbone.history.start();
    }
}

new App();