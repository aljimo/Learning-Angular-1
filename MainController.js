app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Esta es la primera App en Angular de Beto'; 
  $scope.promo = 'String de promo.';
  $scope.products = [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0 
  }, 
  { 
    name: 'A Game of Thrones', 
    price: 15, 
    pubdate: new Date('1996', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'A Clash of Kings', 
    price: 20, 
    pubdate: new Date('1998', '08', '01'), 
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0 
  }  
	];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);

