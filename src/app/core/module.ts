import Backbone = require('backbone');

export interface Declaration {
    execute: Function
}

/**
 * Route decorator
 * Registers a new route into the application, using as base a module class method
 */
export function Route(route:string, View?:new () => Backbone.View<any>):PropertyDecorator {
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

/**
 * Dependency injector decorator
 * A module into the application using as base a module class declaration
 */
export function Autowired(ModuleClass:new () => Declaration) {
    return function (target:any, key:string) {
        target[key] = new ModuleClass();
    };
}