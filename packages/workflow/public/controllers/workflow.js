'use strict';

angular.module('mean').controller('WorkflowListController', ['$scope', 'Global', 'Workflow',
    function($scope, Global, Workflow) {
        $scope.global = Global;
        $scope.items = [{
            isfinish: true,
            description: '签到'
        }, {
            isfinish: true,
            description: '记录日志'
        }, {
            isfinish: true,
            description: '签离'
        }];
    }
]);
angular.module('mean').controller('WorkflowSettingController', ['$scope', 'Global', 'Workflow',
    function($scope, Global, Workflow) {
        $scope.global = Global;

    }
]);