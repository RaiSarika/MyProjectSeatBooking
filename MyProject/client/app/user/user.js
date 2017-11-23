'use strict';

angular.module('myProjectApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user', {
        template: '<user></user>',
        authentication :'user'
      });
  });
