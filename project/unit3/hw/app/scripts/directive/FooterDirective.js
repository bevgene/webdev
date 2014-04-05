/// <reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (directive) {
        'use strict';

        function footerDirective() {
            return {
                scope: true,
                restrict: 'E',
                templateUrl: 'views/partial/footer.html'
            };
        }

        angular.module('auction').directive('auctionFooter', footerDirective);
    })(auction.directive || (auction.directive = {}));
    var directive = auction.directive;
})(auction || (auction = {}));
//# sourceMappingURL=FooterDirective.js.map
