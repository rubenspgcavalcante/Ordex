import Backbone = require('backbone');

export class SideBarModel extends Backbone.Model {
    public defaults;

    constructor(attrs:any, options) {
        this.defaults = {
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