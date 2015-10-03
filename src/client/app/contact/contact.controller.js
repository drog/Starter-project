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
          contact.sendMessage(vm.message).error(function(res){
            vm.type = res.data.type;
            vm.message = res.data.message;
        }).then(function(res){
            vm.type = res.data.type;
            vm.message = res.data.message;

          });
        };



    }
})();
