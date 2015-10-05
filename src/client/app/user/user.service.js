(function() {
    'use strict';

    angular
        .module('app.user')
        .factory('user', user);

    user.$inject = ['$http'];

    /* @ngInject */
    function user($http) {
        return {
            getProfile: getProfile,
            updateProfile: updateProfile,
            changePassword: changePassword,
            getUsers: getUsers
        };

        function getProfile() {
            return $http.get('/api/me');
        }

        function updateProfile(user) {
            return $http.put('/api/update_profile', user);
        }

        function changePassword(user) {
            return $http.put('/api/change_password', user);
        }

        function getUsers() {
            return $http.get('/api/users');
        }

    }
}());
