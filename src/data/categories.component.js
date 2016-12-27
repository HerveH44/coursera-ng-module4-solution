/**
 * Created by hhuneau on 25/12/2016.
 */

// IIFE
(function() {
    'use strict';

    // Definitions
    angular.module('data')
    .component('categories', {
      templateUrl: 'src/data/templates/categories.template.html',
      bindings: {
        items: '<'
      }
    });



})();
