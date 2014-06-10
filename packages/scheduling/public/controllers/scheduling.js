'use strict';

angular.module('mean').controller('SchedulingController', ['$scope', 'Global', 'Scheduling', '$http',
    function($scope, Global, $http) {
        $scope.global = Global;
        $scope.schedulingDate = [ ];
        $scope.init = function() {
            $http.get({
                username: window.user.username
            }, function(data) {
            })
            // body...
        }
        $scope.getScheduling = function() {
            $http.post({
        		studentId:'08113464',
                keyword: 'rocpeng'
        	}, function(data){
        	});
/*            var myUrl = 'http://202.119.199.113:8080/servletForstudio/servlet/GetScheduleServletJsonInterface?xh=08113464';
            $http.jsonp(myUrl).success(
                function(data) {
                    $scope.schedulingDate = decodeURI(data);  
                }
            );*/
        };
    }
]);
