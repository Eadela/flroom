'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Global',
    function($scope, Global) {
        $scope.global = Global;
        $scope.news = [{
            id: '1',
            title: '1',
            content: 'abc'
        }, {
            id: '2',
            title: '2',
            content: 'abc'
        }, {
            id: '3',
            title: '3',
            content: 'abc'
        }, {
            id: '4',
            title: '4', 
            content: 'abc'
        }, {
            id: '5',
            title: '5',
            content: 'abc'
        }];
        $scope.article = function(machineId) {
            $scope.tset = machineId;
            console.log($scope.tset);
            /*var modalInstance = $modal.open({
                templateUrl: 'views/machines/enroll.html',
                controller: function($scope, Machines, $modalInstance, useLog, machineId) {

                    $scope.machineId = machineId;

                    $scope.useLog = new Machines({
                        name: this.name,
                        sno: this.sno,
                        tel: this.tel,
                        machineId: null,
                        status: null,
                        useOff: null

                    });
                    $scope.useLog.machineId = machineId;
                    $scope.useLog.status = 'using';

                    $scope.ok = function() {

                        $scope.useLog.$save(function(res) {
                            alert(res.a);
                        });

                        $modalInstance.close();
                    };

                    $scope.cancel = function() {
                        $modalInstance.dismiss('cancel');
                    };

                },
                resolve: {
                    useLog: function() {
                        return $scope.useLog;
                    },
                    machineId: function() {
                        return $scope.machineId;
                    }
                }
            });

            modalInstance.result.then(function() {
                Machines.query(function(pcStatuses) {
                    $scope.machines = pcStatuses;
                });
            });
*/

        };
    }
]);
