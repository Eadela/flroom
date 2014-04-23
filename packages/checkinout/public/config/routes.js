'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('checkinout example page', {
            url: '/checkinout/example',
            templateUrl: 'checkinout/views/index.html'
        });
    }
]);
