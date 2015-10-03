(function() {
    'use strict';

    angular
        .module('app.auth')
        .factory('authInterceptor', function($rootScope, $q, $window) {
            return {
                request: function(config) {
                    config.headers = config.headers || {};
                    if ($window.localStorage['token']) {
                        config.headers.Authorization = 'Bearer ' + $window.localStorage['token'];
                    }
                    return config;
                },
                response: function(response) {
                    if (response.status === 401) {
                        $window.localStorage.removeItem('token');
                    }
                    return response || $q.when(response);
                }
            };
        });

})();
