(function() {
    'use strict';

    angular.module('app.about', ['app.core'])
        .config(function($stateProvider) {
        $stateProvider.state('about', {
              url: '/about',
              parent: 'navbar',
              templateUrl: 'app/about/about.html',
            });
    });
})();
