angular.module('intuitTest.services', [])

.service('apiService', function($http,$q) {
    var rootUrl = 'https://jsonplaceholder.typicode.com';
    var users = [];
    this.getUsers = function () {
        var deferred = $q.defer();
        if(!users.length) {
            $http.get(rootUrl+"/users").then(function (response) {
                users = response.data;
                deferred.resolve(users);
                return users;
            });
        }
        else deferred.resolve(users);
        return deferred.promise;


    }
    this.addUser = function(user) {
        var promise = $http.post(rootUrl+"/users",user).then(function (response) {
            if(users)
                users.push(response.data);
            return response.data;
        });
        return promise;
    }
    this.getUser = function(userId) {
        var user;
        var promise = $http.get(rootUrl+"/users/"+userId).then(function (response) {
            user = response.data;
            return user;
        });
        return promise;
    }
});



