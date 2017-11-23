'use strict';

angular.module('myProjectApp.auth', ['myProjectApp.constants', 'myProjectApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
