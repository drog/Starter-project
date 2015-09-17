(function() {
    'use strict';

    angular
        .module('app.user')
        .factory('user', user);

    user.$inject = ['$http'];

    /* @ngInject */
    function user($http) {
        return {
            updateProfile : updateProfile,
            changePassword : changePassword
        };


        function updateProfile(user){
          return $http.post('/api/update_profile', user).success(function(data){

          });
        };

          function changePassword(user){
          return $http.post('/api/change_password', user).success(function(data){

          });


        };

    }
}());
