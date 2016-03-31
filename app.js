var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.adjective_one,
    $scope.noun_one,
    $scope.pnoun,
    $scope.name,
    $scope.adjective_two,
    $scope.clothing,
    $scope.noun_two,
    $scope.city,
    $scope.pnountwo,
    $scope.adjective_three,
    $scope.partone,
    $scope.letter,
    $scope.lifestyle,
    $scope.adjective_four,
    $scope.location,
    $scope.parttwo,
    $scope.adjective_five,
    $scope.animal,
    $scope.adjective_six,
    $scope.verb,
    $scope.pnounthree,
    $scope.number,

    $scope.genders = [{Id: 1, Descr:'Male'}, {Id:2, Descr:'Female'}];
    $scope.relatives = [{Id: 1, Descr:'Uncle'}, {Id:2, Descr:'Aunt'}];
    $scope.pronoun = [{Id: 1, Descr:'he'}, {Id:2, Descr:'she'}];


    $scope.user = {};
    $scope.user.FormData = {};
    $scope.user.Gender = $scope.genders[1];
    $scope.user.Relative = $scope.relatives[1];
    $scope.user.Pronoun = $scope.pronoun[1];

});
