angular.module('questionnaireModule')
  .config(function($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl : 'pages/1_name.html',
          controller  : 'NameController'
        })
        .when('/1_name', {
          templateUrl : 'pages/1_name.html',
          controller  : 'NameController'
        })
        .when('/2_location', {
          templateUrl : 'pages/2_location.html',
          controller  : 'LocationController'
        })
        .when('/3_links', {
          templateUrl : 'pages/3_links.html',
          controller  : 'LinksController'
        })
        .when('/4_photo', {
          templateUrl : 'pages/4_photo.html',
          controller  : 'PhotoController'
        })
        .when('/final', {
          templateUrl : 'pages/final.html',
          controller  : 'FinalController'
        })
        .otherwise({redirectTo:'/'});
  });