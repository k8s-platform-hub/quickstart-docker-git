'use strict';

/**
 * @ngdoc service
 * @name angularjsHasuraApp.hasura
 * @description
 * # hasura
 * Factory in the angularjsHasuraApp.
 */
angular.module('angularjsHasuraApp')
  .factory('hasura', function ($window) {
    return $window.hasura;
  });
