(function() {
    'use strict';

    angular.module('app.auth', ['app.core'])
        .config(function($stateProvider) {
            $stateProvider.state('login', {
                    url: '/login',
                    templateUrl: 'app/authentication/login.html',
                    controller: 'AuthController',
                    controllerAs: 'vm',
                    onEnter: ['$state', 'auth', function($state, auth) {
                        if (auth.isLoggedIn()) {
                            $state.go('home');
                        }
                    }]
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'app/authentication/register.html',
                    controller: 'AuthController',
                    controllerAs: 'vm',
                    onEnter: ['$state', 'auth', function($state, auth) {
                        if (auth.isLoggedIn()) {
                            $state.go('home');
                        }
                    }]
                });
        });
})();
