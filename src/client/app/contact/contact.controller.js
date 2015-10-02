(function () {
    'use strict';

    angular
        .module('app.contact')
        .controller('ContactController', ContactController);


    ContactController.$inject = ['contact'];

    function ContactController(contact) {
        var vm = this;
        vm.message = {};


        vm.sendMessage = function(){
          contact.sendMessage(vm.message).error(function(error){
            vm.type = 'error';
            vm.message = error.message;
        }).then(function(data){
            vm.type = 'success';
            vm.message = data.data.message;

          });
        };



    }
})();
