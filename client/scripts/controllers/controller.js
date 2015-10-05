myApp.controller('SomeController', ["$scope", function($scope){
    $scope.someTexts = [{name:"Text 1"},{name: "Text 2"},{name: "Text 3"}, {name: "Text 4"}, {name: "Text 5"}];
    console.log($scope.someTexts);
    $scope.kittens = [
        ['http://placekitten.com/g/200/300','http://placekitten.com/g/200/301','http://placekitten.com/g/200/303'],
        ['http://placekitten.com/g/200/301','http://placekitten.com/g/200/303','http://placekitten.com/g/200/300'],
        ['http://placekitten.com/g/200/303','http://placekitten.com/g/200/300','http://placekitten.com/g/200/301']
    ];
}]);

myApp.controller('AnotherController', ["$scope", function($scope){
    $scope.thing = "There you are!";
    console.log("Another Controller");
}]);