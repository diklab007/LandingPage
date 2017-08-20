var myApp = angular.module('myApp',[]);

//myApp.directive('myDirective', function() {});
//myApp.factory('myService', function() {});


myApp.controller('landingPageController', ['$scope', function($scope) {
    var $ctrl = this;
    $scope.name = 'Dikla';
}]);