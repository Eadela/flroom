'use strict';

/**
*  Module
*
* Description
*/
angular.module('mean.scheduling').factory('Scheduling', ['$resource', function($resource){
	return $resource('http://202.119.199.113:8080/servletForstudio/servlet/GetScheduleServletJsonInterface/:xh', {xh: '@xuehao'});
}]);