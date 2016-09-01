"use strict";

var app = angular.module("TodoApp", ["ngRoute"]);
// Routing has to do with the url in your browser
app.config(function($routeProvider) {
  $routeProvider.
    when('/items/list', {
      // only the U in Url is capitalized!!!
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl'
    }).
    when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'TodoCtrl'
    }).
    otherwise('/items/list');
});