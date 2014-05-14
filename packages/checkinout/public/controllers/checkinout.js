'use strict';

angular.module('mean').controller('CheckinoutController', ['$scope', 'Global', 'Checkinout', 'CheckRecord', '$q',
    function($scope, Global, Checkinout, CheckRecord, $q) {
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
            }, function(status) {
                $scope.working = status.working;
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
            var deferred = $q.defer();
            var checkIn = function() {
                Checkinout.checkIn({
                    username: window.user.username
                }, function() {
                    $scope.checkStatus = '上班中';
                    $scope.btn = 'btn-success';
                    $scope.working = true;
                    deferred.resolve();
                });
            };
            var checkOut = function() {
                Checkinout.checkOut({
                    username: window.user.username
                }, function() {
                    $scope.checkStatus = '未上班';
                    $scope.btn = 'btn-primary';
                    $scope.working = false;
                    deferred.resolve();
                });
            };
            $scope.working ? checkOut() : checkIn();
            return deferred.promise;
        };

        var promise = $scope.check();
        promise.then(function() {
            $scope.fetch();
        }, null, null);
    }
]);
