(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(configureTheme);

    configureTheme.$inject = ['$mdThemingProvider'];

    function configureTheme($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange')
            .warnPalette('red');
    }

    core.config(configRouter);

    configRouter.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider'];

    function configRouter($urlRouterProvider, $locationProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);

        $httpProvider.interceptors.push('authInterceptor');
    }

    core.run(configAuth);

    configAuth.$inject = ['$rootScope', '$state', 'auth'];

    function configAuth($rootScope, $state, auth) {
        $rootScope.$on('$stateChangeStart', function(e, to) {
            if (to.data && to.data.requiresLogin) {
                if (!auth.isLoggedIn()) {
                    e.preventDefault();
                    $state.go('login');
                }
            }
        });

    }

})();
