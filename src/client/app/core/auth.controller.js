(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);


    AuthController.$inject = ['$state', 'auth'];

    function AuthController($state, auth) {
        var vm = this;
        vm.user = {};

        vm.register = function(){
          auth.register(vm.user).error(function(error){
            vm.type = 'error';
            vm.message = error.message;
          }).then(function(){
            $state.go('home');
          });
        };

        vm.logIn = function(){
          auth.logIn(vm.user).error(function(error){
            vm.type = 'error';
            vm.message = error.message;
          }).then(function(){
            $state.go('home');
          });
        };
    }
})();
