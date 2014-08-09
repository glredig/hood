app.controller('PerformersCtrl', function($scope) {
  $scope.performers = [
    { name: 'DJ Jazzy Jeff', id: 1, location: { lat: 37.393794, lng: -122.098097 }, image: "http://releaseboard.com/images/releaseboard_gabe.jpeg" },
    { name: 'Sam Da Man', id: 2, location: { lat: 37.394953, lng: -122.100897 }, image: "http://releaseboard.com/images/releaseboard_john.png" }
  ];

  $scope.buildMarkers = function() {
    var markers = {};

    angular.forEach($scope.performers, function(value, key) {
      var m = "m" + (key + 1);

      markers[m] = {
        lat: value.location.lat,
        lng: value.location.lng,
        focus: false,
        draggable: false,
        message: "<img src='" + value.image + "' /><span>" + value.name + "</span><a href='#/app/performers/" + 
                  value.id + "'> > </a>",
        icon: {}
      }
    });

    return markers;
  }

  angular.extend($scope, {
    center: {
      autoDiscover: true
    },
    markers: $scope.buildMarkers()
  });
});