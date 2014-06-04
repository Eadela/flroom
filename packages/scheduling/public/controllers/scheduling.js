'use strict';

angular.module('mean').controller('SchedulingController', ['$scope', 'Global', 'Scheduling', '$http',
    function($scope, Global, Scheduling, $http) {
        $scope.global = Global;
        $scope.schedulingDate = [ ];
        $scope.getScheduling = function() {
            /*        	Scheduling.query({
        		xuhao:'08113464'
        	}, function(data){
        	});*/
            var myUrl = 'http://202.119.199.113:8080/servletForstudio/servlet/GetScheduleServletJsonInterface?xh=08113464';
            $http.jsonp(myUrl).success(
                function(data) {
                    console.log("data");
                    $scope.schedulingDate = decodeURI(data);  
                }
            );
        };
    }
]);
