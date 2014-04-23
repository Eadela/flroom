'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('statistics example page', {
            url: '/statistics/example',
            templateUrl: 'statistics/views/index.html'
        });
    }
]);
