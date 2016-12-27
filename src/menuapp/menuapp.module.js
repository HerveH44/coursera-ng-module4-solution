/**
 * Created by hhuneau on 25/12/2016.
 */

// IIFE
(function() {
    'use strict';

    // Definitions
    angular.module('MenuApp', ['ui.router','data'])
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

})();
