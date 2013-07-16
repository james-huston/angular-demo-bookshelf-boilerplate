
angular.module('bookshelf')

.controller('BookController', function ($scope, BookService, $routeParams, $location) {
  $scope.book = {};
  $scope.bookId = $routeParams.bookId || undefined;
  if ($scope.bookId !== undefined) {
    $scope.book = BookService.getBooks($scope.bookId);
  }

  $scope.updateBook = function (bookId) {
    if (bookId !== undefined) {
      BookService.updateBook(bookId, $scope.book);
    } else {
      BookService.addBook($scope.book);
    }
    $location.url('/');
  };

  $scope.cancelUpdate = function () {
    $location.url('/');
  };
});