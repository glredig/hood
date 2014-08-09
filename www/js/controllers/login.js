app.controller('LoginCtrl', function ($scope, $state, OpenFB, Facebook, CurrentUser, Helpers) {

  $scope.facebookLogin = function () {
    Helpers.show_loading();
    OpenFB.login('email,user_birthday').then(
      function (response) {
        Facebook.save(
          { facebook: { token: window.sessionStorage.fbtoken }},
          function(response) {
            var user_json = response.current_user;
            CurrentUser.store(user_json);
            Helpers.hide_loading();
            $state.go('app.performers');
          },
          function(response) {
            Helpers.ajax_error_handling(response);
            OpenFB.revokePermissions(null, null);
          }
        );
      },
      function () {
        Helpers.showAlert('Could not login to Facebook. Please try again later.');
      });
  };
});
