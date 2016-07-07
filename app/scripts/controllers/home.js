'use strict';

/**
 * @ngdoc function
 * @name coolcatzApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the coolcatzApp
 */
angular.module('coolcatzApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    angular.module('coolcatzApp')
  .controller('ViewCtrl', function ($scope, user, Auth, Ref, $firebaseObject, $timeout) {
    $scope.user = user;
    $scope.messages = [];
    var profile = $firebaseObject(Ref.child('users'));
    profile.$bindTo($scope, 'profile');

  });
  });
