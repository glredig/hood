app.controller('AppCtrl', function($scope, $state, CurrentUser) {
  $scope.logout = function () {
    CurrentUser.sign_out();
  };

  $scope.revokePermissions = function () {
    OpenFB.revokePermissions().then(
      function () {
        $state.go('app.login');
      },
      function () {
        alert('Revoke permissions failed');
      });
  };
});
