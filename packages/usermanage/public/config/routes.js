'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('usermanage example page', {
            url: '/usermanage/example',
            templateUrl: 'usermanage/views/index.html'
        });
    }
]);
