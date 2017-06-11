'use strict';

angular.module('intuitTest.addUser', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/addUser', {
            templateUrl: 'views/addUser.html',
            controller: 'addUserCtrl'
        });
    }])

    .controller('addUserCtrl', ['$scope','apiService','$window','$cacheFactory',function($scope,apiService,$window,$cacheFactory) {
        $scope.newUser = function(user) {
            console.log(apiService.users)
            apiService.addUser(user).then(function(response){
                $window.location.href = "#!/userList";
            });
        }

    }]);