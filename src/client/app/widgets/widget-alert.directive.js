(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('widgetAlert', widgetAlert);

    /* @ngInject */
    function widgetAlert() {

        var directive = {
            scope: {
                'message': '@',
                'type': '@'
            },
            templateUrl: 'app/widgets/widget-alert.html',
            restrict: 'EA'
        };
        return directive;
    }
})();
