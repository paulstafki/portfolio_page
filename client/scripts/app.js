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
        when('/gamma', {
            templateUrl: "/assets/views/routes/gamma.html",
            controller: "AnotherController"
        }).
        when('/dossier', {
            templateUrl: "/assets/views/routes/dossier.html",
            controller: "AnotherController"
        }).
        when('/hobbies', {
            templateUrl: "/assets/views/routes/hobbies.html",
            controller: "AnotherController"
        }).
        otherwise({
            redirectTo: "/home"
        })
}]);