import Backbone = require('backbone');

import HomeViewModule = require('./views/home.view');
import Module = require('../core/module');

export class Home implements Module.Declaration {
    @Module.route('home', HomeViewModule.HomeView)
    execute() {

    }
}