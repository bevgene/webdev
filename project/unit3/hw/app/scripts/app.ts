// Use this file to *create* an AngularJS module for your app and configure $routeProvider.
/// <reference path='refs.ts' />

module auction {
    'use strict';

    angular.module('auction', ['ngRoute'])
    .config(($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchController'
                })
                .when('/product/:id', {
                    templateUrl: 'views/product.html',
                    controller: 'ProductController',
                    resolve: auction.controller.ProductController.resolve

                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}


