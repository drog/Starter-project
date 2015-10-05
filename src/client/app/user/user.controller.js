(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('UserController', UserController);


    UserController.$inject = ['user'];

    function UserController(user) {
        var vm = this;
        vm.user = {};
        vm.profileForm = {};
        vm.passForm = {};

        activate();

        function activate(){
            return user.getProfile().then(function(response) {
                vm.user  = response.data;
                return vm.user;
            });
        }

        vm.updateProfile = function() {
            user.updateProfile(vm.user).error(function(res) {
                vm.profileForm.type = res.data.type;
                vm.profileForm.message = res.data.message;
            }).then(function(res) {
                vm.profileForm.type = res.data.type;
                vm.profileForm.message = res.data.message;
            });
        };

        vm.changePassword = function() {
            user.changePassword(vm.userPass).error(function(res) {
                vm.passForm.type = res.data.type;
                vm.passForm.message = res.data.message;
            }).then(function(res) {
                vm.passForm.type = res.data.type;
                vm.passForm.message = res.data.message;
            });
        };


    }
})();
