'use strict';

(function(){

class MappingComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket=socket;
    this.MovieData = [];
    this.awesomeThings = [];
    this.mapping =[];

    $scope.$on('$destroy', function(){
      socket.unsyncUpdates('mappingendpoint');
    });

  }
$onInit(){
  this.$http.get('/api/searchmoviesendpoints')
    .then(response => {
      this.MovieData = response.data;
      this.socket.syncUpdates('searchmoviesendpoints', this.Movies);
    });

  this.$http.get('/api/theatresendpoints')
    .then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
    this.$http.get('/api/mappingendpoints')
      .then(response => {
        this.mapping = response.data;
        this.socket.syncUpdates('thing', this.mapping);
      });
}

AddMapping(){
  alert('add');
  this.$http.post('/api/mappingendpoints',{
    date: this.date,
    time: this.time,
    name: this.name,
    year: this.year,
    city: this.city,
    theatre: this.theatre

  });
}

}

angular.module('myProjectApp')
  .component('mapping', {
    templateUrl: 'app/mapping/mapping.html',
    controller: MappingComponent,
    controllerAs: 'mappingCtrl'
  });

})();
