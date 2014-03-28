// Use this file to *create* an AngularJS module for your app and configure $routeProvider.
/// <reference path="../scripts/refs.ts" />

"use strict";
//angular.module('auction', []);
var auctionApp = angular.module('auction', ['ngRoute']);

auctionApp
.config(($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
        .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController'
//                    resolve: HomeController.resolve
            })
        .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchController'
//                    resolve: SearchController.resolve
            })
        .otherwise({
                redirectTo: 'views/home.html'
            });
    });


//initialize jquery-ui slider
//have no idea how it works or where in should be placed in file structure, guess it will be explained in Unit 3
//http://stackoverflow.com/questions/16899747/jquery-plugins-doesnt-work-well-with-angularjs
auctionApp.directive('slider', function() {
    var directive = {
        restrict: 'A',
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
                            document.getElementById('inputSearchSliderCurrMinPrice').value = ui.values[0];
                            document.getElementById('inputSearchSliderCurrMaxPrice').value = ui.values[1];
                        }
                    });
                }, 1);
            });
        }
    };
    return directive;
});


//initialize jquery-ui slider
//have no idea how it works or where in should be placed in file structure, guess it will be explained in Unit 3
//http://stackoverflow.com/questions/16899747/jquery-plugins-doesnt-work-well-with-angularjs
//auctionApp.directive('slider', function() {
//    var directive = {
//        restrict: 'A',
//        link: function(scope, element, attrs, ctrl) {
//            scope.$watch(attrs.slider, function(value) {
//                setTimeout(function() {
//                    $(element[0]).slider({
//                        values: [10, 90],
//                        range: true
//                    });
//                }, 1);
//            });
//        }
//    };
//    return directive;
//});


//var auctionApplication = angular.module('auction', ['ngRoute']);
//
//module auction {
//    angular.module('auction', ['ngRoute'])
//    .config(($routeProvider: ng.route.IRouteProvider) => {
//            $routeProvider
//            .when('/', {
//                    templateUrl: 'views/home.html',
//                    controller: 'HomeController',
//                    resolve: HomeController.resolve
//                })
//            .when('/search', {
//                    templateUrl: 'views/search.html',
//                    controller: 'SearchController',
//                    resolve: SearchController.resolve
//                })
//            .otherwise({
//                    redirectTo: '/'
//                });
//        });
//}

