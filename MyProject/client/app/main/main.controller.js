'use strict';

(function() {

  class MainController {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.MovieData = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit(){


      this.$http.get('/api/searchmoviesendpoints')
        .then(response => {
          console.log("hello");
          this.MovieData = response.data;
          this.socket.syncUpdates('thing', this.MovieData);
        });
      }


   setData(movies){
    // alert("yeahhhhh"+ movies.original_title);
    sessionStorage.setItem('MovieData',movies.original_title);

     //$location.path('/user');
   }

  }

  angular.module('myProjectApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'searchmoviesCtrl'
    });
})();
