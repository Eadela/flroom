'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('manage example page', {
            url: '/manage/example',
            templateUrl: 'manage/views/index.html'
        });
    }
]);
