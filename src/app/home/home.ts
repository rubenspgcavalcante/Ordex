import Backbone = require('backbone');
import HomeViewModule = require('./views/home.view');

export class Home {
    static execute() {
        new HomeViewModule.HomeView().render();
    }
}
