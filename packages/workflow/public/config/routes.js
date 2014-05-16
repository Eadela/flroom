'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
        .state('workflow list', {
            url: '/workflow',
            templateUrl: 'workflow/views/list.html'
        }).state('workflow setting', {
            url: '/workflow/setting',
            templateUrl: 'workflow/views/setting.html'
        });
    }
]);
