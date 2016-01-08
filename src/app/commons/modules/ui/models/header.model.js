define([
    'backbone'
], function (Backbone) {

    /** @exports HeaderModel */
    var HeaderModel = Backbone.Model.extend({
        defaults: {
            title: 'Ordex',
            links: [
                {title: 'Home', href: '#/home'}
            ]
        }
    });

    return HeaderModel;
});