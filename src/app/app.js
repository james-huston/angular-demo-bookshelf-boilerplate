
angular.module('bookshelf.services', []);

angular.module('bookshelf', ['bookshelf.services'])

.config(function ($routeProvider) {
  $routeProvider
    .when('/book', {
      templateUrl: 'views/book.html',
      controller: 'BookController'
    })
    .when('/book/:bookId', {
      templateUrl: 'views/book.html',
      controller: 'BookController'
    })
    .when('/:filter', {
      templateUrl: 'views/books.html',
      controller: 'BookshelfController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
