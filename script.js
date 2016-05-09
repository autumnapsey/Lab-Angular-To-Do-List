var toDo = angular.module("toDo", []);

toDo.controller("toDoController", function($scope){
	$scope.toDoList = ["Add things to To Do list", "Figure out Angular"];
});

$scope.toDoThing = function(){
	$scope.toDoList.push($scope.toDoEnter);
	$scope.toDoEnter = "";
};