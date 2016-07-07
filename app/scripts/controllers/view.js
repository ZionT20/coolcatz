'use strict';
/**
 * @ngdoc function
 * @name muck2App.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Provides rudimentary account management functions.
 */
angular.module('coolcatzApp')
  .controller('ViewCtrl', function ($scope, user, Auth, Ref, $firebaseObject, $timeout) {
    $scope.user = user;
    $scope.messages = [];
    var profile = $firebaseObject(Ref.child('users/'+user.uid));
    profile.$bindTo($scope, 'profile');
    
    $scope.viewGym = function(visits) {
    	// TODO
    };

    $scope.viewWater = function(visits) {
    	// TODO
    };

    $scope.viewSteps = function(visits) {
    	// TODO
    };

  });
