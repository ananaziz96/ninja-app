let myApp = angular.module("myNinjaApp", []);

//The function passed in can be fired when before our app runs/loads, etc.
//i.e. routing
// myApp.config([
//   "$routeProvider",
//   function() {
//     $routeProvider
//       .when("/home", {
//         templateUrl: "views/home.html"
//       })
//       .when("/directory", {
//         templateUrl: "views/directory.html",
//         controller: "NinjaController"
//       })
//       .otherwise({
//         redirectTo: "/home"
//       });
//   }
// ]);

//The function passed in can be fired when our app runs/loads, etc.
myApp.run(function() {});

myApp.controller("NinjaController", [
  "$scope",
  function($scope) {
    $scope.message = "Hello everyone! Welcome to my Ninja App";

    //Removing a ninja
    $scope.removeItem = function(item) {
      var index = $scope.ninjas.indexOf(item);
      $scope.ninjas.splice(index, 1);
    };

    //Adding a new ninja
    $scope.addNinja = function() {
      $scope.ninjas.push({
        name: $scope.newNinja.name,
        belt: $scope.newNinja.belt,
        rate: $scope.newNinja.rate,
        available: true
      });

      //Clear the form after adding
      $scope.newNinja.name = "";
      $scope.newNinja.belt = "";
      $scope.newNinja.rate = "";
    };

    $scope.ninjas = [
      {
        name: "Yoshi",
        belt: "orange",
        rate: 50,
        available: true,
        imageSource: "images/image1.jpg"
      },
      {
        name: "Crystal",
        belt: "green",
        rate: 100,
        available: true,
        imageSource: "images/image2.jpg"
      },
      {
        name: "Kenji",
        belt: "brown",
        rate: 150,
        available: false,
        imageSource: "images/image3.jpg"
      },
      {
        name: "Shaun",
        belt: "blue",
        rate: 200,
        available: true,
        imageSource: "images/image4.jpg"
      }
    ];
  }
]);
