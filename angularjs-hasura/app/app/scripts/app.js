'use strict';

/**
 * @ngdoc overview
 * @name angularjsHasuraApp
 * @description
 * # angularjsHasuraApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsHasuraApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function(hasura, $location){
		// Set Hasura project name
    hasura.setProject('caddy89');

		/** Force users to login */
		// if (hasura.user.id === 0) {
		// 	$location.path('/login')
		// }
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/query', {
        templateUrl: 'views/query.html',
        controller: 'QueryCtrl',
        controllerAs: 'query'
      })
      .when('/filestore', {
        templateUrl: 'views/filestore.html',
        controller: 'FilestoreCtrl',
        controllerAs: 'filestore'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
