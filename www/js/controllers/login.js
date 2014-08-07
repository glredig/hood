app.controller('LoginCtrl', function ($scope, $location, OpenFB, Facebook, CurrentUser) {

  $scope.facebookLogin = function () {
    OpenFB.login('email,user_birthday').then(
      function (response) {
        Facebook.save(
          { facebook: { token: window.sessionStorage.fbtoken }},
          function(response) {
            console.log(response);
            var user_json = response.current_user;
            CurrentUser.store(user_json);
          },
          function(response) {
            console.log(response);
            // Helpers.ajax_error_handling(response);
          }
        );
        $location.path('/app/performers');
      },
      function () {
        alert('OpenFB login failed');
      });
  };
});
