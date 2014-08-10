app.controller('AppCtrl', function($scope, $state, CurrentUser) {
  $scope.logout = function () {
    CurrentUser.sign_out();
  };
});
