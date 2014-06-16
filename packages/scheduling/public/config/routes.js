'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state('scheduling example page', {
            url: '/scheduling/example',
            templateUrl: 'scheduling/views/index.html'
        });
    }
]);
