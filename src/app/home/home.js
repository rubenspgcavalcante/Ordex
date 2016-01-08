define([
    'backbone',
    './views/home.view'
], function (Backbone, HomeView) {

    return {
        execute: function () {
            new HomeView().render();
        }
    }
});