define([
    'backbone',
    'react',
    'reactDom',
    'jsx!../components/home',
    'jsx!../../commons/modules/ui/components/base-template'
], function (Backbone, React, ReactDom, Home, BaseTemplate) {
    var BaseTemplateElement = React.createElement(BaseTemplate, {
        content: Home
    });

    var HomeView = Backbone.View.extend({
        el: 'body .wrapper',
        render: function () {
            ReactDom.render(BaseTemplateElement, this.$el.get(0));
            return this;
        }
    });

    return HomeView;
});