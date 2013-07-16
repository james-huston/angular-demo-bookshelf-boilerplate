
angular.module('bookshelf')

.controller('NavigationController', function ($scope, $location) {
  $scope.path = $location.path();
});
