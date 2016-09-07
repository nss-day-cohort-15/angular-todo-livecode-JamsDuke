"use strict";

app.controller("ItemListCtrl", function($scope, ItemStorage, SearchTermData) {
  $scope.searchText = SearchTermData;
  let user = $scope.$parent.getUser();

  ItemStorage.getItemList(user)
  .then((itemCollectionArr) => {
    $scope.items = itemCollectionArr;
  });

  $scope.itemDelete = (itemId) => {
    ItemStorage.deleteItem(itemId)
    .then( (response) => {
      ItemStorage.getItemList(user)
      .then( (itemCollectionArr) => {
        $scope.items = itemCollectionArr;
      });
    });
  };
});