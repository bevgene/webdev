// Implement HomeController here. It should manage Home page.
/// <reference path='../refs.ts'/>

module auction.controller {
    'use strict';

    import m = auction.model;
    import s = auction.service;

    export interface IHomeScope extends ng.IScope {
        model: HomeController;
    }

    export class HomeController {
        static $inject = ['$scope', 'ProductService'];



        public featuredProducts: m.ProductModel[];

        constructor(private $scope: IHomeScope,
                    private productService: s.IProductService) {
            this.$scope.model = this;
            this.productService.getFeatured()
                .then((products) => this.featuredProducts = products);
        }
    }


    angular.module('auction').controller('HomeController', HomeController);
}
