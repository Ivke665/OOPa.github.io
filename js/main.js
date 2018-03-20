var app = angular.module('myApp', []);

app.controller('mc2', function ($scope, $log, forumDB) {
  $scope.allForum = forumDB;
  $scope.classType = '';
})
