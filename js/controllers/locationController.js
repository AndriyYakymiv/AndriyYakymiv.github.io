questionModule.controller('locationController', function($scope,$rootScope,$http,$location) {
	$http.get('../../data/countries.json').then(function (response) {
		$scope.countries = response.data;
	});

	$http.get('../../data/cities.json').then(function (response) {
		$scope.cities = response.data;
	});

	    $scope.selected = undefined;

	
	$scope.getCitiesFromCountry = function(){
		$scope.citiesFromCountry = [];
		$scope.CitiesC = []
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
	      			$scope.citiesFromCountry.push($scope.cities[key].name);
	      			var obj = {
	      				name:$scope.cities[key].name
	      			}
	      			$scope.CitiesC.push(obj);
	      		}
	      	}
	    }
	};

	
	$scope.nextPage = function (path){
		$rootScope.page3NotActive = false;
		$rootScope.country = $scope.country;
		$rootScope.city = $scope.city.name;
		$location.path(path);
	};

});
/*<select name="userCity" class="inp selection col-xs-12 col-sm-8 col-md-8" ng-model="city" required ng-options="city for city in citiesFromCountry">
				<option class="fisrt-option" value="">--City--</option>
			</select>*/