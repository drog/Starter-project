(function() {
    'use strict';

    angular.module('app.user', ['app.core'])
        .config(function($stateProvider) {
            $stateProvider.state('user', {
                url: '/user',
                parent: 'navbar',
                templateUrl: 'app/user/user.html',
                controller: 'UserController',
                controllerAs: 'vm'
            }).state('list-users', {
                url: '/users',
                parent: 'navbar',
                templateUrl: 'app/user/list-users.html',
                controller: 'UserListController',
                controllerAs: 'vm',
                data: {
                    requiresLogin: true
                }
            });
        });
})();
