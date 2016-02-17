import Backbone = require('backbone');

export interface Declaration {
    execute: Function
}

export function route(route:string, View?:new () => Backbone.View<any>):PropertyDecorator {
    return function (target:Declaration, propertyKey:string | symbol) {

        class Router extends Backbone.Router {
            constructor(options?:Backbone.RouterOptions) {
                this.routes = {};
                this.routes[route] = 'routeExecutor';

                super(options);
            }

            routeExecutor() {
                if (typeof View !== "undefined") {
                    var view = new View();
                    view.render();
                }
                target.execute();
            }
        }

        new Router();
    }
}