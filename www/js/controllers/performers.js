app.controller('PerformersCtrl', function($scope) {
  $scope.performers = [
    { name: 'DJ Jazzy Jeff', id: 1, location: { lat: 37.393794, lng: -122.098097 } },
    { name: 'Sam Da Man', id: 2, location: { lat: 37.394953, lng: -122.100897 } }
  ];

  angular.extend($scope, {
    center: {
        autoDiscover: true
    }
  });
});