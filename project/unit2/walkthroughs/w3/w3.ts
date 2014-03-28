// Creates a module
var auction = angular.module('auction', []);

auction.controller('IndexController', ['$scope', function ($scope) {
    $scope.model = {
        message: 'Initial message'
    };

}]);
