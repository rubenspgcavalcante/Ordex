require.config({
    baseUrl: '/',

    paths: {
        jquery: 'vendor/jquery/dist/jquery',
        underscore: 'vendor/underscore/underscore',
        mdl: 'vendor/material-design-lite/material',
        backbone: 'vendor/backbone/backbone',
        react: 'vendor/react/react-with-addons',
        reactDom: 'vendor/react/react-dom',
        flux: 'vendor/flux/dist/Flux',
        text: 'vendor/requirejs-text/text',
        jsx: 'vendor/jsx-requirejs-plugin/js/jsx',
        JSXTransformer: 'vendor/jsx-requirejs-plugin/js/JSXTransformer'
    },
    jsx: {
        fileExtension: '.jsx'
    },
    shim: {
        mdl: {
            exports: 'componentHandler'
        }
    },
    deps: ['app/app.js']
});