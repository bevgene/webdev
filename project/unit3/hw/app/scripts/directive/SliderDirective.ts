/// <reference path='../refs.ts'/>

interface JQuery {
    slider(obj: any): any;
}

module auction.directive {
    'use strict';

    function sliderDirective() {
        return {
            restrict: "A",
            templateUrl: "views/partial/search_form.html",
            link: function(scope, element, attrs, ctrl) {
                scope.$watch(attrs.slider, function(value) {
                    setTimeout(function() {
                        $(element[0]).slider({
                            range: true,
                            min: 0,
                            max: 2500,
                            values: [1000, 1500],
                            step: 5,
                            slide: function( event, ui) {
                                angular.element('#inputSearchSliderCurrMinPrice').val(ui.values[0]) ;
                                angular.element('#inputSearchSliderCurrMaxPrice').val(ui.values[1]);
                            }
                        });
                    }, 1);
                });
            }
        };
    }

    angular.module('auction').directive('slider', sliderDirective);
}
