'use strict';

angular.module('mean').controller('CheckinoutController', ['$scope', 'Global', 'Checkinout',
  function($scope, Global, Checkinout) {
    $scope.global = Global;

    $scope.working = undefined;

    var testStatus = function() {
      if (typeof $scope.working === 'undefined') {
        $scope.checkStatus = '加载中...';
      } else {
        if ($scope.working) {
          $scope.checkStatus = '上班中';
        } else {
          $scope.checkStatus = '签到上班';
        }
      }
    };

    testStatus();

    $scope.fetch = function() {
      Checkinout.get({
        username: window.user.username
      }, function(status) {
        $scope.working = status.working;
        testStatus();
      });
    };

    $scope.check = function() {
      var checkIn = function() {
        Checkinout.checkIn({
          username: window.user.username
        }, function() {
          $scope.checkStatus = '上班中';
          $scope.working = true;
        });
      };
      var checkOut = function() {
        Checkinout.checkOut({
          username: window.user.username
        }, function() {
          $scope.checkStatus = '签到上班';
          $scope.working = false;
        });
      };
      return $scope.working ? checkOut() : checkIn();
    };
  }
]);
