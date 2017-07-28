'use strict';

/**
 * @ngdoc function
 * @name angularjsHasuraApp.controller:FilestoreCtrl
 * @description
 * # FilestoreCtrl
 * Controller of the angularjsHasuraApp
 */
angular.module('angularjsHasuraApp')
  .controller('FilestoreCtrl', function (hasura, $scope) {
		var scope = this;
		var input = document.getElementById('file-upload');
		var fileId;
		this.uploadFile = function() {
			hasura.file.upload(
				input,
				function (successResponse) {
					fileId = successResponse.file_id;
					scope.file = fileId;
					console.log('Uploaded file: ' + fileId);
					$scope.$apply();
				},
				function (errorResponse) {
					console.log('Error uploading file');
					console.log(errorResponse);
				});
		}

		this.downloadFile = function(file) {
	    hasura.file.download(file, function(success){
				alert('file downloaded');
			}, function(error){
				alert('download failed');
			}); // This will use the HTML5 download attribute to start downloading the file
		}
		this.deleteFile = function(file) {
	    hasura.file.delete(file, function(success){
				alert('file deleted');
				scope.file = undefined;
				$scope.$apply();
			}, function(error){
				alert('file delete failed');
			});
		}
  });
