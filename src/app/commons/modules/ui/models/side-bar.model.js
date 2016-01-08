define([
    'backbone'
], function (Backbone) {

    /** @exports SideBarModel */
    var SideBarModel = Backbone.Model.extend({
        defaults: {
            title: 'User Name',
            links: [
                {title: 'Home', href: '#/home'},
                {title: 'To do list', href: '#/todos'},
                {title: 'Calendar', href: '#/calendar'}
            ]
        }
    });

    return SideBarModel;
});