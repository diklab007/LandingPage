var myApp = angular.module('myApp',['rzModule', 'ui.bootstrap']);

myApp.filter('price', function () {
    return function(items, maxValue) {
        items = items.filter(function(item){
            return item.price <= maxValue;
        });
        return items;
    }
});
myApp.controller('navController', function ($scope, $location, $anchorScroll) {
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;
    $scope.something= function(){};

    $scope.goTo = function(idName) {
        $location.hash(idName);
        $anchorScroll();
        $scope.isNavCollapsed = true;
        
      }

  });
myApp.controller('aboutUsController', ['$scope', function($scope) {
    var $ctrl = this;
    $scope.minRangeSlider = {
        maxValue: 5000,
        options: {
            floor: 1000,
            ceil: 5000,
            step: 500
        }
    };

    $scope.rehabPackages = [
        {label:'Basic', price:1000},
        {label:'Basic with benfits', price:1700},
        {label:'Advanced', price:3000},
        {label:'Luxurious', price:4000},
        {label:'OMG ITS SO FUN HERE ILL NEVER LEAVE', price:5000},
    ];
}]);