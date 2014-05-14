'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
    function($scope, Global) {
        $scope.global = Global;
        $scope.news = [{
            num: '1',
            title: '1',
            content: 'abc'
        }, {
            num: '2',
            title: '2',
            content: 'abc'
        }, {
            num: '3',
            title: '3',
            content: 'abc'
        }, {
            num: '4',
            title: '4',
            content: 'abc'
        },{
            num: '5',
            title: '5',
            content: 'abc'
        }];
    }
]);
