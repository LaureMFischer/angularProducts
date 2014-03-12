// TODO: Add angular application module and routes.
//= require_self
//= require_tree ./services/main
//= require_tree ./filters/main
//= require_tree ./controllers/main
//= require_tree ./directives/main

var StoreFront = angular.module('StoreFront',['ngRoute']);

// StoreFront.config(["$httpProvider", function(provider){
//   provider.defaults.headers.common['X-CSRF-Token'] = ('meta[name=csrf-token]').attr('content');
// }]);

StoreFront.config(['$routeProvider', function($routeProvider){
  // Default Route
  $routeProvider.otherwise({
      templateUrl: '../assets/mainIndex.html',
      controller: 'IndexCtrl'
  });

  // Route to retrieve one product
  // '/product/:productId
  $routeProvider.when('/product/:productId',{
      templateUrl: '../assets/mainProduct.html',
      controller: 'ProductCtrl'
  });

  $routeProvider.when('/products/new',{
    templateUrl: '../assets/mainCreatePost.html',
    controller: 'CreateProductCtrl'
  });
}]);
