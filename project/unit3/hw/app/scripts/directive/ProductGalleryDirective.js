/// <reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (directive) {
        'use strict';

        function productGalleryDirective() {
            return {
                restrict: 'E',
                templateUrl: 'views/partial/product_gallery.html'
            };
        }

        angular.module('auction').directive('auctionProductGallery', productGalleryDirective);
    })(auction.directive || (auction.directive = {}));
    var directive = auction.directive;
})(auction || (auction = {}));
//# sourceMappingURL=ProductGalleryDirective.js.map
