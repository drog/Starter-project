(function() {
    'use strict';

    angular
        .module('app.auth')
        .factory('auth', auth);

    auth.$inject = ['$http', '$window'];

    /* @ngInject */
    function auth($http, $window) {
        var auth = {
            saveToken : saveToken,
            getToken : getToken,
            isLoggedIn : isLoggedIn,
            currentUser : currentUser,
            register :register,
            logIn : logIn,
            logOut :logOut
        };

        return auth;

        function saveToken(token){
          $window.localStorage['token'] = token;
        }

        function getToken(){
          return $window.localStorage['token'];
        }

        function isLoggedIn(){
          var token = auth.getToken();

          if(token){
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.exp > Date.now() / 1000;
          } else {
            return false;
          }
        }

        function currentUser(){
          if(auth.isLoggedIn()){
            var token = auth.getToken();
            var payload = JSON.parse($window.atob(token.split('.')[1]));

            return payload.username;
          }
        }

        function register(user){
          return $http.post('/api/register', user).success(function(data){
            auth.saveToken(data.token);
          });
        }

        function logIn(user){
          return $http.post('/api/login', user).success(function(data){
            auth.saveToken(data.token);
          });
        }

        function logOut(){
          $window.localStorage.removeItem('token');
        }


    }
}());
