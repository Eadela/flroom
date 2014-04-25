'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('resources example page', {
            url: '/resources/example',
            templateUrl: 'resources/views/index.html'
        });
    }
]);
