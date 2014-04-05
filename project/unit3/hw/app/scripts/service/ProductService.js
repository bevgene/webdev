/// <reference path='../refs.ts'/>
var auction;
(function (auction) {
    (function (service) {
        'use strict';

        

        // Actual implementation of IProductService.
        var ProductService = (function () {
            // Notice how we use TypeScript's ambient type declarations provided by
            // DefinitelyTyped library.
            function ProductService($http, $log, $q) {
                this.$http = $http;
                this.$log = $log;
                this.$q = $q;
            }
            /**
            * Returns the list of featured products.
            * @returns {IPromise<T>} List of featured products.
            */
            ProductService.prototype.getFeatured = function () {
                var _this = this;
                var products = this.$q.defer();

                this.$http.get('data/featured.json').success(function (data) {
                    return products.resolve(data.items);
                }).error(function () {
                    return _this.$log.error(ProductService.ERROR_MSG_FEATURED);
                });

                return products.promise;
            };

            /**
            * Searches for products with specified criteria.
            * @returns {IPromise<T>} List of found products.
            */
            ProductService.prototype.search = function () {
                var _this = this;
                var products = this.$q.defer();

                this.$http.get('data/search.json').success(function (data) {
                    return products.resolve(data.items);
                }).error(function () {
                    return _this.$log.error(ProductService.ERROR_MSG_SEARCH);
                });

                return products.promise;
            };

            /***
            * Gets a single product from list of products based on provided param id
            * @param id - id of the product to return all information about
            * @returns {IPromise<T>} product that has provided id
            */
            ProductService.prototype.getProductById = function (id) {
                return this.search().then(function (products) {
                    return _.find(products, function (currentProduct) {
                        return currentProduct.id === id;
                    });
                });
            };
            ProductService.$inject = ['$http', '$log', '$q'];

            ProductService.ERROR_MSG_FEATURED = "Can't get static JSON file with the list of featured products." + "Please, ensure you are runnning application on a web server.";

            ProductService.ERROR_MSG_SEARCH = "Can't get static JSON file with the list of found products." + "Please, ensure you are runnning application on a web server.";
            return ProductService;
        })();

        // Register service in the Angular's DI container.
        angular.module('auction').service('ProductService', ProductService);
    })(auction.service || (auction.service = {}));
    var service = auction.service;
})(auction || (auction = {}));
//# sourceMappingURL=ProductService.js.map
