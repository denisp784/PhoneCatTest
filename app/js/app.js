var myApp = angular.module("myApp", [
  'ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
  when('/phones', {
    templateUrl: 'pages/phones.html',
    conroller: 'MyCtrl'}).
  when('/phones/:phoneId', {
    templateUrl: 'pages/phone-details.html',
    controller: 'PhoneDetailCtrl'
  }).
  otherwise({
    redirectTo: '/phones'
  });
}]);

myApp.factory