"use strict";

app.controller("NavCtrl", function($scope, SearchTermData) {
  $scope.searchText = SearchTermData;
  $scope.navItems = [
    {url: "#/logout", name: "Logout"},
    {url: "#/items/list", name: "All Items"},
    {url: "#/items/new", name: "New Items"}
  ];
});



