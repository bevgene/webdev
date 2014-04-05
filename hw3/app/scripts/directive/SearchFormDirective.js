/// <reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (directive) {
        'use strict';

        angular.module('auction').directive('auctionSearch', function () {
            return {
                scope: true,
                restrict: 'E',
                templateUrl: 'views/partial/search_form.html'
            };
        });
    })(auction.directive || (auction.directive = {}));
    var directive = auction.directive;
})(auction || (auction = {}));
//# sourceMappingURL=SearchFormDirective.jse.js.map
