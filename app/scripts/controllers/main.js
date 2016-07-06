'use strict';

/**
 * @ngdoc function
 * @name coolcatzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coolcatzApp
 */
angular.module('coolcatzApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
