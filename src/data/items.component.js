/**
 * Created by hhuneau on 25/12/2016.
 */

// IIFE
(function() {
    'use strict';

    // Definitions
    angular.module('data')
    .component('items', {
      templateUrl: 'src/data/templates/items.template.html',
      bindings: {
        items: '<item'
      }
    });



})();
