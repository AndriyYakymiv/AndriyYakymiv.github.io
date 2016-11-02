questionModule.controller('locationController', function($scope,$rootScope,$http,$location) {
	$http.get('../../data/countries.json').then(function (response) {
		$scope.countries = response.data;
	});

	$http.get('../../data/cities.json').then(function (response) {
		$scope.cities = response.data;
	});

	
	$scope.getCitiesFromCountry = function(){
		$scope.citiesFromCountry = [];
	    for (var key in $scope.countries){
		    if($scope.countries[key] == $scope.country) {
		    	$scope.countryID = key;
		      	break;
		    }
	    }
	    for (var key in $scope.cities){
	    	$scope.repeatFlag = false;
	      	if($scope.cities[key].country == $scope.countryID && $scope.cities[key].name != $scope.country) {
	      		for (var i = 0; i < $scope.citiesFromCountry.length; i++) {
	      			if ($scope.cities[key].name == $scope.citiesFromCountry[i]) {
	      				$scope.repeatFlag = true;
	      			}
	      		}
	      		if(!$scope.repeatFlag) $scope.citiesFromCountry.push($scope.cities[key].name);
	      	}
	    }
	};

	
	$scope.nextPage = function (path){
		$rootScope.page3NotActive = false;
		$rootScope.country = $scope.country;
		$rootScope.city = $scope.city;
		$location.path(path);
	};

});
