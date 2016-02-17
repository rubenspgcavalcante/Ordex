import Backbone = require('backbone');

export class HeaderModel extends Backbone.Model {
    constructor(attrs:any, options) {
        this.defaults = <any>{
            title: 'Ordex',
            links: [
                {title: 'Home', href: '#/home'}
            ]
        };

        super(attrs, options);
    }
}