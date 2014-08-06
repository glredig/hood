app.controller('LoginCtrl', function ($scope, $location, OpenFB) {

  $scope.facebookLogin = function () {
    OpenFB.login('email').then(
      function (response) {
        console.log("FB TOKEN", window.sessionStorage.fbtoken);
        $location.path('/app/performers');
      },
      function () {
        alert('OpenFB login failed');
      });
  };
});
