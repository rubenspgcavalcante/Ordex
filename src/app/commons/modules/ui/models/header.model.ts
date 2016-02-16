import Backbone = require('backbone');

export class HeaderModel extends Backbone.Model {
    public defaults;

    constructor(attrs:any, options) {
        this.defaults = {
            title: 'Ordex',
            links: [
                {title: 'Home', href: '#/home'}
            ]
        };

        super(attrs, options);
    }
}