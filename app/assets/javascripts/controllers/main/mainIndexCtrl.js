  var IndexCtrl = function($scope, $location, $http, productData){
    // $scope.data = {};
    // $scope.data.products = [
    //     {"name": "Shoe", "description": "Old Red smelly", "price": 0.22 },
    //     {"name": "Frisbee", "description": "Silver with a gerbil taped to it" ,  "price": 7.63 }
    // ];

    $scope.data = {};
    productData.loadProducts(function(data){
        $scope.data.products = data.products;
    });


    $scope.viewPost = function(productId){
        $location.url('/product/' + productId);
    };

    $scope.navNewProduct = function(){
        $location.url('/products/new');
    };
};
