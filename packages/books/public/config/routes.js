'use strict';

angular.module('mean').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('books example page', {
            url: '/books/example',
            templateUrl: 'books/views/index.html'
        });
    }
]);
