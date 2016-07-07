'use strict';

/**
 * @ngdoc function
 * @name coolcatzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the coolcatzApp
 */
angular.module('coolcatzApp')
  .controller('MainCtrl', function ($scope, $firebaseObject) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var profile = $firebaseObject(Ref.child('users'));
    profile.$bindTo($scope, 'profile');

       // To iterate the key/value pairs of the object, use angular.forEach()
       angular.forEach(profile, function(value, key) {
          console.log(key, value);
       });
     });


    // synchronize a read-only, synchronized array of messages, limit to most recent 1
  //   $scope.messages = $firebaseArray(Ref.child('messages').limitToLast(10));

  //   // display any errors
  //   $scope.messages.$loaded().catch(alert);

  //   // provide a method for adding a message
  //   $scope.addMessage = function(newMessage) {
  //     if( newMessage ) {
  //       // push a message to the end of the array
  //       $scope.messages.$add({text: newMessage})
  //         // display any errors
  //         .catch(alert);
  //     }
  //   };

  //   function alert(msg) {
  //     $scope.err = msg;
  //     $timeout(function() {
  //       $scope.err = null;
  //     }, 5000);
  //   }
  // });
  });
