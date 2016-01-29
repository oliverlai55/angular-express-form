var myApp = angular.module('myApp', []);

myApp.controller('searchCntl', function($scope, $http){

	$scope.url = 'http://localhost:3000/search'; //This is where Angular will look for search terms.
	$scope.url = 'http://localhost'

	$scope.search = function(){
		$http.post($scope.url, {"data" : $scope.keywords}).success(function(searchResult, status){
		console.log("something happened");
		$scope.foundTerms = searchResult;
		$scope.status = status;
		});
		
	}
});