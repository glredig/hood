app.controller('NavBarCtrl', function($scope, CurrentUser) {
  $scope.profile_picture = CurrentUser.profile_picture();
});
