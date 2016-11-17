angular.module('questionnaireModule')
	.controller('LocationController', LocationController);

	LocationController.$inject = ['$scope', '$rootScope', '$http', '$location'];

	function LocationController($scope,$rootScope,$http,$location) {
		$http.get('../../data/countries.json').then(function (response) {
			$scope.countries = response.data;
		});

		$http.get('../../data/cities.json').then(function (response) {
			$scope.cities = response.data;
		});

		    $scope.selected = undefined;

		
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
		      		if(!$scope.repeatFlag) {
		      			var obj = {
		      				name:$scope.cities[key].name
		      			}
		      			$scope.citiesFromCountry.push(obj);
		      		}
		      	}
		    }
		};

		
		$scope.nextPage = function (path){
			$rootScope.page3NotActive = false;
			$rootScope.country = $scope.country;
			$rootScope.city = ($scope.city.name) ? $scope.city.name : $scope.city;
			$location.path(path);
		};

	};
