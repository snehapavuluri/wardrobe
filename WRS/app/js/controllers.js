'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope',  '$routeParams', 'Phone',
  function($scope,  $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
   
  }]);

phonecatControllers.controller('PhoneAddCtrl', ['$scope', '$http', '$routeParams', 
  function($scope, $http, $routeParams) {

    $scope.saveStudent = function() {
        
        $scope.student = {
          "firstName":$scope.firstName,
          "lastName":$scope.lastName,
          "car":$scope.car
        };

       $http.post("/wrs/services/greeting3", $scope.student, {}).then (
       function(responseData) {
          console.log(responseData.data);
       },
       function(errorData) {
          console.log(errorData.data);

       });
    
    }
      
  }]);

phonecatControllers.controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$routeParams', '$location',
  function($scope, $rootScope, $http, $routeParams,$location) {

    $scope.login = function() {
        $scope.user = {
              "userName":$scope.userName,
              "password":$scope.passWord
            };
       $http.post("/wrs/services/login", $scope.user, {}).then (
                           function(responseData) {
                              console.log(responseData.data);
                              $rootScope.loginUser = responseData.data;
                               if($rootScope.loginUser.password == $scope.passWord ) {
                                    console.log(angular.toJson($rootScope.loginUser,true));
                                    $location.path('/Landing');   
                               }else{
                                   $scope.invalidLogin = true;
                               }
                           },
                           function(errorData) {
                              console.log(errorData.data);
                           });
        
    };
      
  }]);
phonecatControllers.controller('RegistrationCtrl', ['$scope', '$rootScope', '$http', '$routeParams', '$location',
  function($scope, $rootScope, $http, $routeParams,$location) {

    $scope.register = function() {
        if( $scope.password != $scope.cPassword){
            $scope.invalidInfo = true;
        }
        $scope.user = {
              "userName":$scope.userName,
              "firstName":$scope.firstName,
              "lastName":$scope.lastName,
              "email":$scope.email,
              "password":$scope.password
            };
    $http.post("/wrs/services/register", $scope.user, {}).then (
       function(responseData) {
          console.log(responseData.data);
            $scope.registerUser = responseData.data;
            if($scope.registerUser.userName == $scope.userName ) {
                $location.path('/Login');   
            }else{
                $scope.invalidInfo = true;
            }
       },
       function(errorData) {
          console.log(errorData.data);

       });
    };
  }]);

phonecatControllers.controller('LandingCtrl', ['$scope','$rootScope', '$http', '$routeParams', '$location',
  function($scope, $rootScope, $http, $routeParams,$location) {

      $scope.colors = [ 'Red', 'White', 'Black' ];
      $scope.categories = [ 'Hats', 'Outerwear', 'Tops', 'Pants', 'Shoes', 'Accessories','Outfits'];
      $scope.sizes = [ 'S', 'M', 'L','XL'];
      $scope.patterns = [ 'Plain', 'Windowpane', 'Pin Checks','Plaid'];
      $scope.styles = [ 'Casual', 'Business Casual', 'Professional'];

    
     $scope.setFile = function(element) {
              $scope.currentFile = element.files[0];
               $scope.image_path =$scope.currentFile.fileName;
               var reader = new FileReader();

                reader.onload = function(event) {
           
                $scope.image_source = event.target.result;
                $scope.$apply();

              }
              // when the file is read it triggers the onload event above.
              reader.readAsDataURL(element.files[0]);
    }
      
    $scope.addItem = function() {
        $scope.item = {
              "userName":$rootScope.loginUser.userName,
              "category":$scope.selCat,
              "color":$scope.selColor,
              "type":$scope.selCat,
              "size":$scope.selSize,
              "pattern":$scope.selPattern,
              "style":$scope.selStyle,
              "notes":$scope.selNote
            };
        
    $http.post("/wrs/services/addItem", $scope.item, {}).then (
       function(responseData) {
          console.log(responseData.data); 
          $scope.saveFlag=true;
           $('#divAddItem').modal('hide');
       },
       function(errorData) {
          console.log(errorData.data);
       });
    };
      
  }]);

phonecatControllers.controller('SearchWardrobeCtrl', ['$scope', '$rootScope', '$http', '$routeParams', '$location',
  function($scope, $rootScope, $http, $routeParams,$location) {
      
      $scope.colors = [ 'Red', 'White', 'Black' ];
      $scope.categories = [ 'Hats', 'Outerwear', 'Tops', 'Pants', 'Shoes', 'Accessories','Outfits'];
      $scope.sizes = [ 'S', 'M', 'L','XL'];
      $scope.patterns = [ 'Plain', 'Windowpane', 'Pin Checks','Plaid'];
      $scope.styles = [ 'Casual', 'Business Casual', 'Professional'];
      
    $http.get("/wrs/services/getItems?category=Hats",  {}).then (
                                           function(responseData) {
                                              console.log(responseData.data);
                                               $scope.allItems = responseData.data; 
                                           },
                                           function(errorData) {
                                              console.log(errorData.data);


                                           });
      
    $http.get("/wrs/services/getItems?category=Tops",  {}).then (
                                           function(responseData) {
                                              console.log(responseData.data);
                                               $scope.allTopItems = responseData.data; 
                                           },
                                           function(errorData) {
                                              console.log(errorData.data);


                                           });
    $http.get("/wrs/services/getItems?category=Pants",  {}).then (
                                           function(responseData) {
                                              console.log(responseData.data);
                                               $scope.allPantItems = responseData.data; 
                                           },
                                           function(errorData) {
                                              console.log(errorData.data);


                                           });
       
      
    $scope.showdetails = function(item) {
        console.log("Testing**********************************" );
        console.log(angular.toJson(item,true)  );
        $scope.itemDetails= item;
        console.log("Testing**********************************" );
        console.log(angular.toJson(itemDetails,true)  );
        $('#divItemDetails').modal('show');
        
    };
      
    $scope.getItems = function(item) {
        $http.get("/wrs/services/getItems?category="+item,  {}).then (
                                           function(responseData) {
                                              console.log(responseData.data);
                                               $scope.allItems = responseData.data; 
                                           },
                                           function(errorData) {
                                              console.log(errorData.data);
        
                                           });
            }
  }]);

