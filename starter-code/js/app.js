/* setup your angular app here */
var app = angular.module('MyApp', []);

app.controller('HomeCtrl', ['$scope', function ($scope) {

	$scope.pool = fruit.concat(vegetables);

	$scope.fruits = [];
	$scope.veggies = [];

	$scope.addToFruits = function(index) {
		console.log("pushed to fruits");
		$scope.fruits.push($scope.pool[index]);
		$scope.pool.splice(index,1);
	}

	$scope.addToVeggies = function(index) {
		console.log("pushed to veggies");
		$scope.veggies.push($scope.pool[index]);
		$scope.pool.splice(index,1);
	}

	$scope.addFruitToPool = function(index) {
		console.log("pushed from fruits to pool");
		$scope.pool.push($scope.fruits[index]);
		$scope.fruits.splice(index,1);
	}

	$scope.addVeggieToPool = function(index) {
		console.log("pushed from veggies to pool");
		$scope.pool.push($scope.veggies[index]);
		$scope.veggies.splice(index,1);
	}

	$scope.check = function(type, idx) {
    if ($scope.pool.length === 0) {
      if (type === "fruit") {
        if(fruit.indexOf($scope.fruits[idx]) === -1){
          return true;
        } else {
          return false;
        }
      } else if (type === "veggies") {
        if(vegetables.indexOf($scope.veggies[idx]) === -1){
          return true;
        } else {
          return false;
        }
      }
    }
  }

}]);

//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);