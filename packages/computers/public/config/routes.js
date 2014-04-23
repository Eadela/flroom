'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('computers example page', {
            url: '/computers/example',
            templateUrl: 'computers/views/index.html'
        });
    }
]);
