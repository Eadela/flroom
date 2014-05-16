'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('check use', {
            url: '/check/use',
            templateUrl: 'checkinout/views/check.html'
        });
    }
]);
