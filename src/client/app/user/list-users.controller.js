(function() {
    'use strict';

    angular
        .module('app.user')
        .controller('UserListController', UserListController);


    UserListController.$inject = ['user'];

    function UserListController(user) {
        var vm = this;
        vm.users = [];
        getData();

        vm.selected = [];

        vm.query = {
            filter: '',
            order: 'username',
            limit: 5,
            page: 1
          };


        function getData(){
            user.getUsers().error(function(error) {
            }).then(function(res) {
                angular.copy(res.data, vm.users);

            });
        }



    }
})();
