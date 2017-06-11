angular.module('intuitTest.directives', [])
.directive('userItem', function ($compile) {

    return {
        restrict: "A",
        replace:true,
        link: function (scope, element, attrs) {

        },
        templateUrl:"directives/user/user.html",
        scope: {
            user: "="
        }
    };
});