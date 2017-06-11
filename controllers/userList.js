'use strict';

angular.module('intuitTest.userList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userList', {
    templateUrl: 'views/userList.html',
    controller: 'userListCtrl'
  });
}])

.controller('userListCtrl', ['$scope','apiService',function($scope,apiService) {
         apiService.getUsers().then(function(response){
             $scope.users = response;
        });


}])
