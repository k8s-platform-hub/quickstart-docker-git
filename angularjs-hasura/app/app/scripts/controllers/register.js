'use strict';

/**
 * @ngdoc function
 * @name angularjsHasuraApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularjsHasuraApp
 */
angular.module('angularjsHasuraApp')
  .controller('RegisterCtrl', function (hasura, $location) {
    this.do = function () {
      if(this.password !== this.confirmpassword) {
        alert('passwords do not match');
      } else {
        hasura.setUsername(this.username);
        hasura.auth.signup(this.password, {}, function(){
          console.log('signup success');
        }, function(error){
          console.log('signup error');
        });
      }
    }
  });
