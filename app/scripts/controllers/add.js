'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('coolcatzApp')
  .controller('AddCtrl', function ($scope, user, Auth, Ref, $firebaseObject, $timeout) {
    $scope.user = user;
    $scope.messages = [];
    var profile = $firebaseObject(Ref.child('users/'+user.uid));
    profile.$bindTo($scope, 'profile');
    
    $scope.addGym = function(visits) {
    	// TODO
    };

    $scope.addWater = function(visits) {
    	// TODO
    };

    $scope.addSteps = function(visits) {
    	// TODO
    };

  });
