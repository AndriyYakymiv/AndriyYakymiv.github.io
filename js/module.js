var questionModule = angular.module('questionnaireModule',['ngRoute']);

questionModule.run(function($rootScope,$location) {
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

})
questionModule.config(function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl : 'pages/1_name.html',
        controller  : 'nameController'
      })
      .when('/1_name', {
        templateUrl : 'pages/1_name.html',
        controller  : 'nameController'
      })
      .when('/2_location', {
        templateUrl : 'pages/2_location.html',
        controller  : 'locationController'
      })
      .when('/3_links', {
        templateUrl : 'pages/3_links.html',
        controller  : 'linksController'
      })
      .when('/4_photo', {
        templateUrl : 'pages/4_photo.html',
        controller  : 'photoController'
      })
      .when('/final', {
        templateUrl : 'pages/final.html',
        controller  : 'finalController'
      })
      .otherwise({redirectTo:'/'});
});

