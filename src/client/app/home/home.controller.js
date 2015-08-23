(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);


    HomeController.$inject = ['$scope', '$location'];

    function HomeController($scope, $location) {
        var vm = this;
        $scope.submit = function() {

          $location.path('/home');

          return false;
        }
    }
})();
