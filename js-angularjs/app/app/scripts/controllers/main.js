'use strict';

/**
 * @ngdoc function
 * @name angularjsHasuraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsHasuraApp
 */
angular.module('angularjsHasuraApp')
  .controller('MainCtrl', function (hasura, $location) {
    this.doLogout = function(){
      hasura.auth.logout(function(success){
        console.log('logout success');
        alert('logged out');
        $location.path('/login');
      }, function(error){
        console.log('logout failed');
      });
    }
  });
