/// <reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (directive) {
        'use strict';

        function datepickerDirective() {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.datepicker();
                }
            };
        }

        angular.module('auction').directive('auctionDatepicker', datepickerDirective);
    })(auction.directive || (auction.directive = {}));
    var directive = auction.directive;
})(auction || (auction = {}));
//# sourceMappingURL=DatePickerDirective.js.map
