'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('workflow example page', {
            url: '/workflow/example',
            templateUrl: 'workflow/views/index.html'
        });
    }
]);
