'use strict';

angular.module('myProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mapping', {
        template: '<mapping></mapping>',
        authentication :'admin'
      });
  });
