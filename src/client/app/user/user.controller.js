(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('UserController', UserController);


    UserController.$inject = ['user'];

    function UserController(user) {
        var vm = this;
        vm.user = {};


        vm.updateProfile = function() {
            user.updateProfile(vm.user).error(function(error) {
                vm.error = error;
            }).then(function() {});
        };

        vm.changePassword = function() {
            user.changePassword(vm.user).error(function(error) {
                vm.error = error;
            }).then(function() {});
        };


    }
})();
