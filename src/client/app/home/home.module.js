(function() {
    'use strict';

    angular.module('app.home', ['app.core'])
        .config(function($stateProvider) {
        $stateProvider.state('home', {
              url: '/home',
              parent: 'navbar',
              templateUrl: 'app/home/home.html',
              controller: 'HomeController',
              controllerAs: 'vm'
            });
    });
})();
