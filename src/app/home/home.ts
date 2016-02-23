import Backbone = require('backbone');

import {HomeView} from './views/home.view';
import {Route, Declaration} from '../core/module';

export class Home implements Declaration {
    @Route('home', HomeView)
    execute() {

    }
}