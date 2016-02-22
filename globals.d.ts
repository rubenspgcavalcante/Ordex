declare module "mdl" {
    interface ComponentHandlerInterface {
        upgradeDom(): void;
    }

    var componentHandler:ComponentHandlerInterface;
    export = componentHandler;
}

declare module "reactDom" {
    interface ReactDomInterface {
        render(component:Object, element:HTMLElement): void;
    }

    var ReactDom:ReactDomInterface;
    export = ReactDom;
}