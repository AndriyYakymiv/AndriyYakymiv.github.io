questionModule.controller('finalController', function($scope,$rootScope,$location) {
	$scope.getInfo = function(info){
		return $rootScope[info];
	};

	$scope.startPage = function(path){
		$rootScope.name = "";
	    $rootScope.email = "";
	    $rootScope.country = "";
	    $rootScope.city = "";
	    $rootScope.facebookLinkInput = "";
	    $rootScope.twitterLinkInput = "";
	    $rootScope.vkLinkInput = "";
	    $rootScope.okLinkInput = "";
	    $rootScope.photo = "";

	    $rootScope.page2NotActive = true;
	    $rootScope.page3NotActive = true;
	    $rootScope.page4NotActive = true;

        $rootScope.facebookInp = false;
	    $rootScope.twitterInp = false;
	    $rootScope.vkInp = false;
	    $rootScope.okInp = false;

	    $rootScope.showLinkButtons = true;
		
		$location.path(path);
	}
});

/*
<p>{{getInfo('name')}}</p>
<p>{{getInfo('email')}}</p>
<p>{{getInfo('country')}}</p>
<p>{{getInfo('city')}}</p>
<p>{{getInfo('twitterLinkInput')}}</p>
<p>{{getInfo('facebookLinkInput')}}</p>
<p>{{getInfo('vkLinkInput')}}</p>
<p>{{getInfo('okLinkInput')}}</p>
*/