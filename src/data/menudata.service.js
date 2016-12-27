/**
 * Created by hhuneau on 25/12/2016.
 */

// IIFE
(function() {
    'use strict';

    // Definitions
    angular.module('data')
    .service('MenuDataService', MenuDataService);

    ///////////////
    // SERVICE:     MenuDataService
    //////////////
    MenuDataService.inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.cache = {
          menu_items : {},
        };

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json"),
            }).then(function (result) {
              console.log("categories", result.data);
              return result.data;
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
          return $http({
              method: "GET",
              url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName),
          }).then(function (result) {
              return result.data.menu_items;
          });

        }

    }
})();
