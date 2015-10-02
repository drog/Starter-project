(function() {
    'use strict';

    angular.module('app.navbar', ['app.core'])
        .config(function($stateProvider) {
            $stateProvider.state('navbar', {
                abstract: true,
                url: '',
                templateUrl: 'app/navbar/navbar.html',
                controller: 'NavbarController',
                controllerAs: 'vm'
            });
        });
})();
