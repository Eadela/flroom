'use strict';

angular.module('mean').controller('UsermanageController', ['$scope', 'Global',
  function($scope, Global, Usermanage) {
    $scope.global = Global;
    $scope.usermanage = {
      name: 'usermanage'
    };

    $scope.create = function() {

    };

    $scope.remove = function(token) {

    };

    $scope.update = function(token) {

    };

    $scope.init = function() {

    };

    $scope.isEmpty = function() {
      return (Object.keys($scope.global.tokens).length === 0);
    }
  }
]);
