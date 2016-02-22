import Backbone = require('backbone');

export class SideBarModel extends Backbone.Model {
    constructor(attrs?:any, options?:any) {
        this.defaults = <any>{
            title: 'User Name',
            links: [
                {title: 'Home', href: '#/home'},
                {title: 'To do list', href: '#/todos'},
                {title: 'Calendar', href: '#/calendar'}
            ]
        };

        super(attrs, options);
    }
}