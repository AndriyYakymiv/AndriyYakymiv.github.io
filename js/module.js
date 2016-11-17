angular.module('questionnaireModule',['ngRoute', 'ui.bootstrap'])
	.factory('BaseFactory', BaseFactory);

	BaseFactory.$inject = ['$rootScope', '$location'];

	function BaseFactory($rootScope, $location) {
	    $rootScope.name = "";
	    $rootScope.email = "";
	    $rootScope.country = "";
	    $rootScope.city = "";
	    $rootScope.facebookLinkInput = "";
	    $rootScope.twitterLinkInput = "";
	    $rootScope.vkLinkInput = "";
	    $rootScope.okLinkInput = "";
	    $rootScope.photo = "";

	    $rootScope.facebookInp = false;
	    $rootScope.twitterInp = false;
	    $rootScope.vkInp = false;
	    $rootScope.okInp = false;

	    $rootScope.page2NotActive = true;
	    $rootScope.page3NotActive = true;
	    $rootScope.page4NotActive = true;

	    $rootScope.showLinkButtons = true;

	    $rootScope.nextLinkPage = function(path){
	      $location.path(path);
	    };
	};


