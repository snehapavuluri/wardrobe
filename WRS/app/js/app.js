'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     when('/Landing', {
        templateUrl: 'partials/Landing.html',
        controller: 'LandingCtrl'
     }).
    when('/Login', {
        templateUrl: 'partials/Login.html',
        controller: 'LoginCtrl'
        }).
     when('/Registration', {
        templateUrl: 'partials/Registration.html',
        controller: 'RegistrationCtrl'
     }).
     when('/AccountSettings', {
        templateUrl: 'partials/AccountSettings.html'
     }).
     when('/WardrobeAssistant', {
        templateUrl: 'partials/WardrobeAssistant.html'
     }).
     when('/SearchWardrobe', {
        templateUrl: 'partials/SearchWardrobe.html',
        controller: 'SearchWardrobeCtrl'
        
     }).
     when('/RemoveWardrobeItems', {
        templateUrl: 'partials/RemoveWardrobeItems.html'
        }).
     when('/OutfitPlanner', {
        templateUrl: 'partials/OutfitPlanner.html'
     }).
    otherwise({
        redirectTo: '/WardrobeAssistant'
     });
  }]);

