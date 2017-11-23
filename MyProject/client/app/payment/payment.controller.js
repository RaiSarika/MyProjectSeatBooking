'use strict';

(function(){

class PaymentComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];
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
  this.$http.get('/api/theatresendpoints')
    .then(response => {
      this.awesomeThings = response.data;
      this.socket.syncUpdates('thing', this.awesomeThings);
    });
    var k = sessionStorage.getItem('MovieData');
    // alert('payment'+ k);
}
}

angular.module('myProjectApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl'
  });

})();
