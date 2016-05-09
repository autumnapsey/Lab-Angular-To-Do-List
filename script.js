var toDo = angular.module("toDo", []);

toDo.controller("toDoController", function($scope){
	$scope.toDoList = ["Add things to To Do list", "Figure out Angular"];


$scope.toDoThing = function(toDoItem){
	$scope.toDoList.push(toDoItem);
	$scope.toDoEnter = "";
};

});