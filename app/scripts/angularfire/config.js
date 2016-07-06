angular.module('firebase.config', [])
  .constant('FBURL', 'https://carbon-68abb.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','anonymous','facebook','google','twitter','github'])

  .constant('loginRedirectPath', '/login');
