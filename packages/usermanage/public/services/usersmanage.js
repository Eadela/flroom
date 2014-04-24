'use strict';

//UsersManage service used for tokens REST endpoint
angular.module('mean.system').factory('Users', ['$resource', function($resource) {
    return $resource('users/manage/:id', {
        id: '@id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);