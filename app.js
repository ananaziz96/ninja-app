//We use modules and controllers to break our angular code
//into manageable chunks.

//The [] is for dependencies that you can pass in.
let myApp = angular.module("myNinjaApp", []);

//The function passed in can be fired when before our app runs/loads, etc.
myApp.config(function() {});

//The function passed in can be fired when our app runs/loads, etc.
myApp.run(function() {});

//Controllers are named with upper case.
//The $scope object is the binding part betweeen the html view and the js controller.
//It is available to both of them.
//HTML is the View and JS is the Controller.
//The $scope is passed into the function because it is a dependency.

//Part 4
myApp.controller("NinjaController", [
  "$scope",
  function($scope) {
    $scope.message = "Hello everyone! Welcome to my Ninja App";

    $scope.removeItem = function(item) {
      var index = $scope.ninjas.indexOf(item);
      $scope.ninjas.splice(index, 1);
    };

    $scope.addNinja = function() {
      $scope.ninjas.push();
    };

    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "orange",
        rate: 50,
        available: true
      },
      {
        name: "Crystal",
        belt: "green",
        rate: 100,
        available: true
      },
      {
        name: "Kenji",
        belt: "brown",
        rate: 150,
        available: false
      },
      {
        name: "Shaun",
        belt: "blue",
        rate: 200,
        available: true
      }
    ];
  }
]);
