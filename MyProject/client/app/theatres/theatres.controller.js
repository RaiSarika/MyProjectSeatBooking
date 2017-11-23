'use strict';

(function(){

class TheatresComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('/api/theatresendpoints')
      .then(response => {
        this.awesomeThings = response.data;
        this.socket.syncUpdates('thing', this.awesomeThings);
      });
      // alert("hi");
      var p = sessionStorage.getItem('sarika');
      // alert(p);
  }

  addThing() {alert("successss");
    if (this.TheatreName&&this.MovieName&&this.City) {
      this.$http.post('/api/theatresendpoints', {
        TheatreName: this.TheatreName,
        MovieName: this.MovieName,
        City: this.City

      });
      // this.MoviesNames = '';
      // this.year = '';
      // this.type = '';
    }
  }

  deleteThing(thing) {
    this.$http.delete('/api/theatresendpoints/' + thing._id);
  }
}

angular.module('myProjectApp')
  .component('theatres', {
    templateUrl: 'app/theatres/theatres.html',
    controller: TheatresComponent,
    controllerAs: 'theatresCtrl'
  });

})();
