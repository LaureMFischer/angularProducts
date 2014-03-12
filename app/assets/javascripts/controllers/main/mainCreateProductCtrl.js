var CreateProductCtrl = function($scope, $location, productData){
  $scope.data = productData.data;
  productData.loadProducts();

  $scope.formData = {
    newProductName: '',
    newProductDescription: '',
    newProductPrice: ''
  };

  $scope.navNewProduct = function(){
    $location.url('/products/new');
  };

  $scope.createProduct = function(){
    productData.createProduct($scope.formData, function(data){
      productData.products.push(data.product);
      console.log("Successfully created a new product");
        // go to the main products page
      $location.url('/');
    })
  };

  $scope.clearForm = function(){
    $scope.formData.newProductName = '';
    $scope.formData.newProductDescription = '';
    $scope.formData.newProductPrice = '';
  };

};
