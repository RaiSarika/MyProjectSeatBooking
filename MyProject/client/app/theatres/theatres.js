'use strict';

angular.module('myProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/theatres', {
        template: '<theatres></theatres>',
        authentication :'admin'
      });
  });
