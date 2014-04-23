'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('edit example page', {
            url: '/edit/example',
            templateUrl: 'edit/views/index.html'
        });
    }
]);
