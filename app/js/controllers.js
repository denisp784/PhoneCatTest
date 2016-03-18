myApp.controller("MyCtrl", ['$scope', '$http',
  function($scope, $http) {
    $http.get("phones/phones.json").success(function (data) {
      $scope.phones = data;
    });
  }]);

myApp.controller("PhoneDetailCtrl", ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {

    $http.get("phones/" + $routeParams.phoneId + ".json").success(function (data) {
      $scope.phone = data;
      $scope.myImage = data.images[0];
    });

    $scope.setImage = function (imageUrl) {
      $scope.myImage = imageUrl;
    };

  }]);