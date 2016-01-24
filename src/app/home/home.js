define(["require", "exports", './views/home.view'], function (require, exports, HomeViewModule) {
    var Home = (function () {
        function Home() {
        }
        Home.execute = function () {
            new HomeViewModule.HomeView().render();
        };
        return Home;
    })();
    exports.Home = Home;
});

//# sourceMappingURL=home.js.map
