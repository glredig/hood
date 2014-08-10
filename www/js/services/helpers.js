app.factory('Helpers', function($state, CurrentUser, $ionicLoading, $ionicPopup) {
  var root = {};

  root.ajax_error_handling = function(response) {
    this.hide_loading();
    if(response.status == 422){
      this.showAlert(response.data.errors.join(" "));
    } else if(response.status == 401) {
      CurrentUser.sign_out();
    } else {
      this.showAlert("We're sorry a technical error has occured.");
    }
  };

  root.show_loading = function() {
    $ionicLoading.show({content: '<div class="large-loading-icon ion-loading-c"></div>'});
  };

  root.hide_loading = function() {
    $ionicLoading.hide();
  };

  root.showAlert = function(message) {
    var alertPopup = $ionicPopup.alert({
      title: message,
      template: ''
    });
  };

  return root;
});

