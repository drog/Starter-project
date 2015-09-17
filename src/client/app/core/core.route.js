(function() {
    'use strict';

    angular
        .module('app.core')
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'app/core/base.html'
      })
      .state('navbar', {
        abstract: true,
        url: '',
        templateUrl: 'app/navbar/navbar.html',
        controller: 'NavbarController',
        controllerAs: 'vm'
      })
      .state('login', {
          url: '/login',
          parent: 'base',
          templateUrl: 'app/login/login.html',
          controller: 'AuthController',
          controllerAs: 'vm',
          onEnter: ['$state', 'auth', function($state, auth){
            if(auth.isLoggedIn()){
              $state.go('home');
            }
          }]
        })
      .state('register', {
          url: '/register',
          parent: 'base',
          templateUrl: 'app/login/register.html',
          controller: 'AuthController',
          controllerAs: 'vm',
          onEnter: ['$state', 'auth', function($state, auth){
            if(auth.isLoggedIn()){
              $state.go('home');
            }
          }]
        });

      }).run(function($rootScope) {
      $rootScope.$on('$viewContentLoaded', function(values) {
        componentHandler.upgradeAllRegistered();
      });
    });


})();
