define([
    'backbone',
    'react',
    'reactDom',
    'jsx!../../commons/modules/ui/components/base-template'
], function (Backbone, React, ReactDom, BaseTemplate) {
    var BaseTemplateElement = React.createElement(BaseTemplate, {
        header: {
            title: 'Ordex',
            links: ['Home']
        },
        sidebar: {
            title: 'Ordex User',
            links: ['Profile', 'To Dos', 'Calendar']
        }
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