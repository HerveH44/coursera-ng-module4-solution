(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

  //enable HTML5Mode for navigation without hash tags
  // $locationProvider.html5Mode(true);

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/home',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  // .state('categories.items', {
  .state('items', {
    url: '/item-detail/{categorieShortName}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: 'ItemsController as itemsList',
    params:{
      categorieShortName: null,
      categoryName: null
    },
    resolve: {
      menu_items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.categorieShortName)
                .then(function (items) {
                  console.log("items:", items);
                  return items;
                });
            }]
    }
  });

}

})();
