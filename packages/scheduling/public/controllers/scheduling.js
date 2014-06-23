'use strict';

angular.module('mean').controller('SchedulingController', ['$scope', 'Global', '$http', '$cookies',
    function($scope, Global, $http, $cookies) {
        $scope.global = Global;
        $scope.popover = {
            'title': ' ',
            'content': ' '
        };
        $scope.loginInf = {};
        $scope.reloadcode = function() {
            var verify = document.getElementById('icode');
            verify.src = verify.src + '?';
        };
        $scope.loginInf.cookie = $cookies['ASP.NET_SessionId'];
        console.log($scope.loginInf.cookie);
        $scope.getScheduleData = function(loginInf) {
            $scope.code = null;
            $scope.response = null;
            $scope.url = 'http://202.119.199.113:8080/servletForstudio/servlet/UpdateDataSpServlet?callback=JSON_CALLBACK&xh=' +
                loginInf.studentId + '&password=' +
                loginInf.password + '&yanzhengma=' +
                loginInf.validateCode + '&cookie=ASP.NET_SessionId=' +
                loginInf.cookie;

            $http({
                method: 'jsonp',
                url: $scope.url
            }).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
            }).
            error(function(data, status) {
                $scope.data = data || 'Request failed';
                $scope.status = status;
            });
        };
        $scope.classInf = {};
        $scope.add = function(classes, classInf) {
            var newclass = {};
            Object.defineProperties(newclass, {
                classname: {
                    value: classInf.classname,
                    writable: true,
                    enumerable: true,
                    configurable: true
                },
                dateOfDay: {
                    value: classInf.dateOfDay,
                    writable: true,
                    enumerable: true,
                    configurable: true
                },
                dayOfWeek: {
                    value: classInf.dayOfWeek,
                    writable: true,
                    enumerable: true,
                    configurable: true
                },
                endWeek: {
                    value: classInf.endWeek,
                    writable: true,
                    enumerable: true,
                    configurable: true
                },
                startWeek: {
                    value: classInf.startWeek,
                    writable: true,
                    enumerable: true,
                    configurable: true
                }
            });
            $scope.classInf = {};
            classes.push(newclass);
            return classes;
        };
        $scope.schedules = [
            [
                [{
                    classname: '程序设计语言原理',
                    endWeek: 9,
                    startWeek: 1,
                }, {
                    classname: '程序设计语言原理',
                    endWeek: 9,
                    startWeek: 1,
                }, {
                    classname: '程序设计语言原理',
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{

                }],
                [{
                    classname: '程序设计语言原理',
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',

                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }]
            ],
            [
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }]
            ],
            [
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }]
            ],
            [
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }]
            ],
            [
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }],
                [{
                    classname: '程序设计语言原理',
                    dateOfDay: 1,
                    dayOfWeek: 1,
                    endWeek: 9,
                    startWeek: 1,
                }]
            ]
        ];
    }
]);
