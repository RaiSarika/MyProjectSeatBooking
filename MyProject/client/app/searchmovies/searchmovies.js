'use strict';

angular.module('myProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/searchmovies', {
        template: '<searchmovies></searchmovies>',
        authentication :'admin'
      });
  });
