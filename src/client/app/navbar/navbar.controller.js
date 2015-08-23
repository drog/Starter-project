(function () {
    'use strict';

    angular
        .module('app.navbar')
        .controller('NavbarController', NavbarController);


    NavbarController.$inject = ['auth'];

    function NavbarController(auth) {
        var vm = this;
        vm.isLoggedIn = auth.isLoggedIn;
        vm.currentUser = auth.currentUser;
        vm.logOut = auth.logOut;
    }
})();
