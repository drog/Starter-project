(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('UserListController', UserListController);


    UserListController.$inject = ['user'];

    function UserListController(user) {
        var vm = this;
        vm.users = [];
        activate();

        vm.selected = [];

        vm.query = {
            filter: '',
            order: 'username',
            limit: 5,
            page: 1
          };


        function activate(){
            return user.getUsers().then(function(response) {
                vm.users  = response.data;
                return vm.users;

            });
        }



    }
})();
