import Backbone = require('backbone');

export interface HeaderModelAttributes {
    title: string,
    links: HeaderModelLink
}

export interface HeaderModelLink {
    title: string,
    href: string
}

export class HeaderModel extends Backbone.Model {
    constructor(attrs?:any, options?:any) {
        this.defaults = <any>{
            title: 'Ordex',
            links: [
                {title: 'Home', href: '#/home'}
            ]
        };

        super(attrs, options);
    }
}