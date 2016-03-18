myApp.controller("MyCtrl", ['$scope', '$http', 'MyService',
    function ($scope, $http, MyService) {
        MyService.getPhones("phones").then(function (phones) {
            $scope.phones = phones.data;
        });
    }]);

myApp.controller("PhoneDetailCtrl", ['$scope', '$routeParams', '$http', 'MyService',
    function ($scope, $routeParams, $http, MyService) {

        MyService.getPhones($routeParams.phoneId).then(function (phones) {
            $scope.phone = phones.data;
            $scope.myImage = phones.data.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.myImage = imageUrl;
        };

    }]);

myApp.service('MyService', function ($http) {
    this.getPhones = function (id) {
        return $http.get("phones/"+ id +".json").then(function (data) {
                return data;
            }
        )
    }
});