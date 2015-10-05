var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "/assets/views/routes/home.html",
            controller: "SomeController"
        }).
        when('/racing', {
            templateUrl: "/assets/views/routes/racing.html",
            controller: "SomeController"
        }).
        //when('/professional', {
        //    templateUrl: "/assets/views/routes/professional.html",
        //    controller: "AnotherController"
        //}).
        //when('/friendlies', {
        //    templateUrl: "/assets/views/routes/friendlies.html",
        //    controller: "AnotherController"
        //}).
        otherwise({
            redirectTo: "/home"
        })
}]);