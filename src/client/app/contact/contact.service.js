(function() {
    'use strict';

    angular
        .module('app.contact')
        .factory('contact', contact);

    contact.$inject = ['$http'];

    /* @ngInject */
    function contact($http) {
        return {
            sendMessage : sendMessage,
        };


        function sendMessage(message){
          return $http.post('/api/contact', message);

        }

    }
}());
