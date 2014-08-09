app.controller('LoginCtrl', function ($scope, $state, OpenFB, Facebook, CurrentUser) {

  $scope.facebookLogin = function () {
    OpenFB.login('email,user_birthday').then(
      function (response) {
        Facebook.save(
          { facebook: { token: window.sessionStorage.fbtoken }},
          function(response) {
            // console.log(response);
            var user_json = response.current_user;
            CurrentUser.store(user_json);
            $state.go('app.performers');
          },
          function(response) {
            // console.log(response);
            // Helpers.ajax_error_handling(response);
          }
        );
      },
      function () {
        alert('OpenFB login failed');
      });
  };
});
