"use strict";

var app = angular.module("TodoApp", ["ngRoute"])
.constant('FirebaseURL', "https://todo-list-a97ea.firebaseio.com/");
// Routing has to do with the url in your browser

let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  if (AuthFactory.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  }).
    when('/items/list', {
      // only the U in Url is capitalized!!!
      templateUrl: 'partials/item-list.html',
      controller: 'ItemListCtrl',
      resolve: {isAuth}
    }).
    when('/items/new', {
      templateUrl: 'partials/item-form.html',
      controller: 'ItemNewCtrl',
      resolve: {isAuth}
    }).
    when("/items/view/:itemId", {
      templateUrl: "partials/item-details.html",
      controller: "ItemViewCtrl",
      resolve: {isAuth}
    }).
    when("/items/view/:itemId/edit", {
      templateUrl: "partials/item-form.html",
      controller: "ItemEditCtrl",
      resolve: {isAuth}
    }).
    otherwise('/');
});

app.run( ($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };
  firebase.initializeApp(authConfig);
});