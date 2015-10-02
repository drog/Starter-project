(function() {
    'use strict';

    angular.module('app.contact', ['app.core'])
        .config(function($stateProvider) {
        $stateProvider.state('contact', {
              url: '/contact',
              parent: 'navbar',
              templateUrl: 'app/contact/contact.html',
              controller: 'ContactController',
              controllerAs: 'vm'
            });
    });
})();
