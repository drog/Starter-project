(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(configureTheme);

    function configureTheme($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('cyan')
            .accentPalette('orange')
            .warnPalette('red');
    }

    core.config(configRouter);

    function configRouter($urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    }

})();
