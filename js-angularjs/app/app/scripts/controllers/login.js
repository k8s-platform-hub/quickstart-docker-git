'use strict';

/**
 * @ngdoc function
 * @name angularjsHasuraApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularjsHasuraApp
 */
angular.module('angularjsHasuraApp')
  .controller('LoginCtrl', function (hasura, $location) {
    // Don't show login page if user is already logged in
    // if (hasura.user.id !== 0) {
    //  $location.path('/');
    // }
    this.do = function() {
      hasura.setUsername(this.username);
      hasura.auth.login(this.password, function(success) {
          console.log('login success');
          console.log(hasura.user);
          $location.path('/');
        }, function(error){
          console.log('login failed');
          console.log(error);
        });
    }
  });
