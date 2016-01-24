/// <reference path="../../../../typings/tsd.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'backbone', 'react', 'reactDom', 'jsx!../components/home', 'jsx!../../commons/modules/ui/components/base-template'], function (require, exports, Backbone, React, ReactDom, Home, BaseTemplate) {
    var BaseTemplateElement = React.createElement(BaseTemplate, {
        content: Home
    });
    var HomeView = (function (_super) {
        __extends(HomeView, _super);
        function HomeView(options) {
            this.el = 'body .wrapper';
            _super.call(this, options);
        }
        HomeView.prototype.render = function () {
            ReactDom.render(BaseTemplateElement, this.$el.get(0));
            return this;
        };
        return HomeView;
    })(Backbone.View);
    exports.HomeView = HomeView;
});

//# sourceMappingURL=home.view.js.map
