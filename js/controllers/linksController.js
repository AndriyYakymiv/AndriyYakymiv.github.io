questionModule.controller('linksController', function($scope,$rootScope,$location,$compile) {

	$scope.showInputLink = function(linkName){
		$scope.elem = $('.input-' + linkName + '-link');
		var scopeStr = linkName + 'Inp';
		if (!$rootScope[scopeStr]){
			$scope.elem.attr('required', true);
		}	
		else {
			$scope.elem.removeAttr('required');
		}
		$rootScope[scopeStr] = !($rootScope[scopeStr]);
		$compile($scope.elem)($scope);
	};

	
	$scope.nextPage = function (path){
		$rootScope.page4NotActive = false;
		$rootScope.facebookLinkInput = $scope.facebookLinkInput;
		$rootScope.twitterLinkInput = $scope.twitterLinkInput;
		$rootScope.vkLinkInput = $scope.vkLinkInput;
		$rootScope.okLinkInput = $scope.okLinkInput;
		$location.path(path);
	};

});
