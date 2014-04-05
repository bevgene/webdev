/// <reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var ProductController = (function () {
            function ProductController($scope, product) {
                this.$scope = $scope;
                this.product = product;
                this.isSearchFormShown = false;
                $scope.model = this;
            }
            ProductController.$inject = ['$scope', 'product'];

            ProductController.resolve = {
                product: [
                    '$route', 'ProductService',
                    function ($route, productService) {
                        var productId = parseInt($route.current.params.id);
                        return productService.getProductById(productId);
                    }]
            };
            return ProductController;
        })();
        controller.ProductController = ProductController;

        angular.module('auction').controller('ProductController', ProductController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=ProductController.js.map
