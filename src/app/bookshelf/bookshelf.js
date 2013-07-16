
angular.module('bookshelf')

.controller('BookshelfController', function ($scope, BookService, $routeParams) {
  var filter = $routeParams.filter || undefined;
  $scope.readFilter = {};
  if (filter === 'reading') {
    $scope.readFilter.completed = 'false';
  } else if (filter === 'completed') {
    $scope.readFilter.completed = 'true';
  }

  $scope.bookArray = BookService.getBooks();

  $scope.toggleStatus = function (bookId) {
    var book = BookService.getBooks(bookId);
    book.completed = !book.completed;
    BookService.updateBook(bookId, book);
  };

  $scope.removeBook = function (bookId) {
    BookService.deleteBook(bookId);
  };
});