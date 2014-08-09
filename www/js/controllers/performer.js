app.controller('PerformerCtrl', function($scope, $stateParams) {
  $scope.performer = { 
    name: 'DJ Jazzy Jeff', 
    id: 1, 
    location: { 
      lat: 37.393794, 
      lng: -122.098097 
    }, 
    image: "http://releaseboard.com/images/releaseboard_gabe.jpeg",
    tagline: "80's all night tonight..." 
  };
})