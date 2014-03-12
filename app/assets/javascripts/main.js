// TODO: Add angular application module and routes.
//= require_self
//= require_tree ./services/main
//= require_tree ./filters/main
//= require_tree ./controllers/main
//= require_tree ./directives/main

var StoreFront = angular.module('StoreFront',['ngRoute']);

StoreFront.config(["$httpProvider", function(provider){
  provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

  var interceptor = ['$location', '$rootScope', '$q', function($location, $rootScope, $q) {
    function success(response) {
      console.log("Intercepted a successful request");
      return response
    };

    function error(response) {
      if (response.status == 401) {
        console.log("Intercepted a failed, 401,request");
        $rootScope.$broadcast('event:unauthorized');
        $location.path('login');
        return response;
      };
      return $q.reject(response);
    };

    return function(promise) {
      return promise.then(success, error);
    };
  }];
  provider.responseInterceptors.push(interceptor);
}]);

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
