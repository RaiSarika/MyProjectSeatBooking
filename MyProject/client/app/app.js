'use strict';

angular.module('myProjectApp', ['myProjectApp.auth', 'myProjectApp.admin', 'myProjectApp.constants',
    'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'validation.match', 'ui.filters'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
