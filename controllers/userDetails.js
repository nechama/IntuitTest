'use strict';

angular.module('intuitTest.userDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users/:userId', {
    templateUrl: 'views/userDetails.html',
    controller: 'userDetailsCtrl'
  });
}])

.controller('userDetailsCtrl', ['$scope','$routeParams','apiService',function($scope,  $routeParams,apiService) {
    var userId = $routeParams.userId;
    apiService.getUser(userId).then(function(response){
        $scope.user = response;
    });
}]);