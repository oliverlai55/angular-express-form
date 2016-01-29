var myApp = angular.module('myApp', []);

myApp.controller('searchCntl', function($scope, $http){

	$scope.url = 'http://localhost:3000/search'; //This is where Angular will look for search terms.

	$scope.search = function(){
		$http.post($scope.url, {"data" : $scope.keywords}).success(function(data, status){
		console.log("something happened");
		$scope.data = data;
		$scope.status = status;
		});
		
	}
});