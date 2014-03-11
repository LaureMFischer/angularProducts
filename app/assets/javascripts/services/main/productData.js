// productData wraps a remote service that provides product data.
// It's used by controllers to get remote data
angular.module('StoreFront').factory('productData',['$http', function($http){

    // Init a the product data with heading
    var productData = {products: [
        { name: "Loading Products",description: "",price: '' }
    ]};

    // method to get all the products.
    productData.loadProducts = function(callback){
        $http.get('./products.json').success(function(data){
            callback(data);
            console.log('Successfully loaded products');
        })
        .error(function(){
            console.log('Failed to load products');
        });
    };

    productData.loadProduct = function(productId, callback){
        $http.get('products/' + productId + '.json')
            .success(function(data){
                callback(data)
                console.log('Successfully loaded product ' + productId);
            })
            .error(function(){
                console.log('Failed to load product ' + productId);
            });
    };

    productData.createProduct = function(newProduct){
    if(newProduct.newProductName == '' || newProduct.newProductdescription == '' || newProduct.newProductPrice == ''){
      alert("Name, Description or Price is blank!");
      return false;
    }

    var data = {new_product: {
      name: newProduct.newProductName,
      description: newProduct.newProductDescription,
      price: newProduct.newProductPrice,
    }};

    $http.post('./products.json', data).
      success(function(data){
        productData.products.push(data);
        console.log("Successfully created a new product");
      }).
      error(function(){
        console.error("Failed to create a new product");
       });

    return true;
  };
    // return the productData
    return productData;
}]);
