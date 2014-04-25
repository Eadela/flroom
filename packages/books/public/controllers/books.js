'use strict';

angular.module('mean').controller('BooksController', ['$scope', 'Global',
    function($scope, Global, Books) {
        $scope.global = Global;
        $scope.books = {
            name: 'books'
        };
    }
]);
