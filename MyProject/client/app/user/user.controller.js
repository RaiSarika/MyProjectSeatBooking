'use strict';

(function(){

class UserComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.mapping =[];
    this.MovieData = [];
    this.bookingdetails =[];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
}

$onInit(){
  this.$http.get('/api/searchmoviesendpoints')
    .then(response => {
      this.MovieData = response.data;
      this.socket.syncUpdates('thing', this.MovieData);
    });
    this.$http.get('/api/mappingendpoints')
      .then(response => {
        this.mapping = response.data;
        this.socket.syncUpdates('thing', this.mapping);
      });
      this.$http.get('/api/Bookingendpoints')
        .then(response => {
          this.bookingdetails = response.data;
          this.socket.syncUpdates('thing', this.bookingdetails);
        });
    var k = sessionStorage.getItem('MovieData');
    // alert('onInit'+ k);
}

saveValue(){
  alert('Payement Details saved');
  this.$http.post('/api/Bookingendpoints',{
    date: this.date,
    time: this.time,
    name: this.name,
    year: this.year,
    city: this.city,
    theatre: this.theatre});
  }

setData(Umovies)
{
  // alert("hi");
  //   alert("yeahhhhh"+ movies.original_title);
  // sessionStorage.setItem('MovieData',Umovies.original_title);
  // sessionStorage.setItem('MovieData',Umovies.release_date);
  // sessionStorage.setItem('mapping',Umovies.TheatreName);
  // sessionStorage.setItem('mapping',Umovies.City);
  // alert("yeahhhhh"+ movies.original_title);
  //   alert("yeahhhhh"+ movies.release_date);
  //     alert("yeahhhhh"+ movies.TheatreName);
  //       alert("yeahhhhh"+ movies.Umovies.City);
}


    }


angular.module('myProjectApp')
  .component('user', {
    templateUrl: 'app/user/user.html',
    controller: UserComponent,
    controllerAs: 'userCtrl'
  });

})();
