'use strict';

angular.module('mean').controller('CheckinoutController', ['$scope', 'Global', 'Checkinout', 'CheckRecord',
    function($scope, Global, Checkinout, CheckRecord) {
        $scope.global = Global;
        $scope.checkRecords = [];
        $scope.working = undefined;
        $scope.btn = '';
        var testStatus = function() {
            if (typeof $scope.working === 'undefined') {
                $scope.checkStatus = '加载中...';
            } else {
                if ($scope.working) {
                    $scope.checkStatus = '上班中';
                    $scope.btn = 'btn-success';
                } else {
                    $scope.checkStatus = '未上班';
                    $scope.btn = 'btn-primary';
                }
            }
        };

        testStatus();

        $scope.get = function() {
            Checkinout.get({
                username: window.user.username
            }, function(checkPeopel) {
                $scope.working = checkPeopel.working;
                testStatus();
            });
            $scope.fetch();
        };

        $scope.fetch = function() {
            CheckRecord.query({
                username: window.user.username
            }, function(data) {
                $scope.checkRecords = data;
            });
        };

        $scope.check = function() {
            var checkIn = function() {
                Checkinout.checkIn({
                    username: window.user.username
                }, function(checkRecords) {
                    $scope.checkStatus = '上班中';
                    $scope.btn = 'btn-success';
                    $scope.working = true;
                });
            };
            var checkOut = function() {
                Checkinout.checkOut({
                    username: window.user.username
                }, function(checkRecords) {
                    $scope.checkStatus = '未上班';
                    $scope.btn = 'btn-primary';
                    $scope.working = false;
                });
            };
            return $scope.working ? checkOut() : checkIn();
        };
    }
]);
