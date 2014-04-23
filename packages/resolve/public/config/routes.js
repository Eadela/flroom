'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('resolve example page', {
            url: '/resolve/example',
            templateUrl: 'resolve/views/index.html'
        });
    }
]);
