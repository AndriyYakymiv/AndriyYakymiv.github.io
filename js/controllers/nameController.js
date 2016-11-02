questionModule.controller('nameController', function($scope,$rootScope,$location) {
	$scope.checkName = function (){
		if($scope.nameForm.userName.$invalid) return "- input correct name.";
	}

	$scope.checkEmail = function (){
		if($scope.nameForm.userEmail.$invalid) return "- input correct e-mail adress.";
	}

	$scope.nextPage = function (path){
		$rootScope.page2NotActive = false;
		$rootScope.name = $scope.name;
		$rootScope.email = $scope.email;
		$location.path(path);
	};
});