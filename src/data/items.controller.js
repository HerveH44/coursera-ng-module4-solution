(function() {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['menu_items', '$stateParams'];

    function ItemsController(menu_items, $stateParams) {
        var itemList = this;

        itemList.categoryName = $stateParams.categoryName;
        itemList.resultTitle = " menu items found";

        itemList.menu_items = menu_items;

        itemList.sortOrder = 'id';
        itemList.sortReverse = false;

        itemList.headers = [{
            lib: "Id.",
            id: "id"
        }, {
            lib: "Short name",
            id: "short_name"
        }, {
            lib: "Name",
            id: "name"
        }, {
            lib: "Description",
            id: "description"
        }, {
            lib: "Price small",
            id: "price_small"
        }, {
            lib: "Price large",
            id: "price_large"
        }];
        // mainList.$onInit = function () {
        //   ShoppingListService.getItems()
        //   .then(function (result) {
        //     mainList.items = result;
        //   });
        // };
    }

})();
