'use strict';

angular.module('mean').controller('SchedulingController', ['$scope', 'Global', '$http',
    function($scope, Global, $http) {
        $scope.global = Global;
        $scope.popover = {
            'title': ' ',
            'content': ' '
        };
        $scope.classInf = {};
        $scope.classIndex = [];
        $scope.dateOfDayInit = function(schedules, index){
          return schedules.map(function(schedule){
            schedule[0].dateOfDay = index;
          });
        };
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
            return classes.push(newclass);
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
