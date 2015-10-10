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

    configAuth.$inject = ['$rootScope', '$state', 'auth', '$mdToast'];

    function configAuth($rootScope, $state, auth, $mdToast) {
        $rootScope.$on('$stateChangeStart', function(e, to) {
            if (to.data && to.data.authorizedRoles && to.data.authorizedRoles.length > 0) {
                if (!auth.isLoggedIn()) {
                    e.preventDefault();
                    $state.go('login');
                    $mdToast.show(
                        $mdToast.simple()
                        .content('Required Login')
                        .position('right')
                        .hideDelay(3000)
                    );
                }else if (!auth.checkRoles(to.data.authorizedRoles)) {
                    e.preventDefault();
                    $state.go('home');
                    $mdToast.show(
                        $mdToast.simple()
                        .content('not authorized')
                        .position('right')
                        .hideDelay(3000)
                    );
                }
            }
        });

    }

})();
