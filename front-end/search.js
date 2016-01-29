var myApp = angular.module('myApp', []);

myApp.controller('searchCntl', function($scope, $http){

	$scope.url = 'http://localhost:3000/search'; //This is where Angular will look for search terms.

});