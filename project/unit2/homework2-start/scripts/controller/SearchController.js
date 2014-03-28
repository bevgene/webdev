/// <reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (controller) {
        'use strict';

        var SearchController = (function () {
            function SearchController($scope, productService) {
                var _this = this;
                this.$scope = $scope;
                this.productService = productService;
                this.$scope.model = this;
                this.productService.search().then(function (products) {
                    return _this.searchResult = products;
                });
            }
            SearchController.$inject = ['$scope', 'ProductService'];
            return SearchController;
        })();
        controller.SearchController = SearchController;

        angular.module('auction').controller('SearchController', SearchController);
    })(auction.controller || (auction.controller = {}));
    var controller = auction.controller;
})(auction || (auction = {}));
//# sourceMappingURL=SearchController.js.map
