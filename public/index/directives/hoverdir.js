'use strict';
angular.module('mean.system').directive('hoverdir', function() {
    return function(scope, elm, attrs) {
/*        var imgElement = elm.children().eq(0);*/
        var divElement = elm.children().eq(1);

        function over() {
            divElement.addClass('fadeUp');
        }
        function out() {
            divElement.removeClass('fadeUp');
        }
        elm.bind('mouseenter', over);
        elm.bind('mouseleave', out);
    };
});
