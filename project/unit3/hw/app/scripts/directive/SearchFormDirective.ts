/// <reference path='../refs.ts'/>


module auction.directive {
    'use strict';

    function searchFormDirective() {
        return {
            scope: true,
            restrict: 'E',
            templateUrl: 'views/partial/search_form.html'
        };
    }

    angular.module('auction').directive('auctionSearchForm', searchFormDirective);
}