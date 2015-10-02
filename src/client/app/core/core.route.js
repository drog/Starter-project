(function() {
    'use strict';

    angular
        .module('app.core')
        .config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/home');
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
          templateUrl: 'app/login/register.html',
          controller: 'AuthController',
          controllerAs: 'vm',
          onEnter: ['$state', 'auth', function($state, auth){
            if(auth.isLoggedIn()){
              $state.go('home');
            }
          }]
        });

        var customBlueMap = 		$mdThemingProvider.extendPalette('light-blue', {
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50'],
            '50': 'ffffff'
          });
        $mdThemingProvider.definePalette('customBlue', customBlueMap);
        $mdThemingProvider.theme('default')
            .primaryPalette('customBlue', {
              'default': '500',
              'hue-1': '50'
            })
            .accentPalette('green');
          $mdThemingProvider.theme('input', 'default')
                .primaryPalette('grey');

              });


})();
