(function () {
    'use strict';

    angular
        .module('app.navbar')
        .controller('NavbarController', NavbarController);


    NavbarController.$inject = ['auth', '$mdSidenav'];

    function NavbarController(auth, $mdSidenav) {
        var vm = this;
        vm.isLoggedIn = auth.isLoggedIn;
        vm.currentUser = auth.currentUser;
        vm.logOut = auth.logOut;

        vm.toggleSidenav = function(menuId) {
           $mdSidenav(menuId).toggle();
         };
    }
})();
