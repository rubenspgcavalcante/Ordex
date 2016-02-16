/// <reference path="../../../../typings/tsd.d.ts"/>

import Backbone = require('backbone');
import React = require('react');
import ReactDom = require('reactDom');

import Home = require('jsx!../components/home');
import BaseTemplate = require('jsx!../../commons/modules/ui/components/base-template');

var BaseTemplateElement = React.createElement(BaseTemplate, {
    content: Home
});

export class HomeView extends Backbone.View<Backbone.Model> {

    constructor(options?) {
        this.el = 'body .wrapper';
        super(options);
    }

    render() {
        ReactDom.render(BaseTemplateElement, this.$el.get(0));
        return this;
    }
}