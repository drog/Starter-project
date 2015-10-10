/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('USER_ROLES', {
            all: '*',
            admin: 'admin',
            user: 'user',
        });
})();
