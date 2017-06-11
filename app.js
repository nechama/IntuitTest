'use strict';

// Declare app level module which depends on views, and components
angular.module('intuitTest', [
  'ngRoute',
  'intuitTest.userList',
  'intuitTest.userDetails',
  'intuitTest.addUser',
    'intuitTest.directives',
    'intuitTest.services'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/userList'});
}]);
