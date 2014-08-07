app.service('CurrentUser', function(localStorageService) {

  this.store = function(current_user){
    localStorageService.add('hood_token', current_user.auth_token);
    localStorageService.add('hood_first_name', current_user.first_name);
    localStorageService.add('hood_last_name', current_user.last_name);
    localStorageService.add('hood_gender', current_user.gender);
    localStorageService.add('hood_id', current_user.id);
    localStorageService.add('hood_locale', current_user.locale);
    localStorageService.add('hood_profile_picture', current_user.profile_picture);
    localStorageService.add('hood_age', current_user.age);
  };

  this.delete_all = function() {
    localStorageService.clearAll();
  };

  this.hood_token = function(){
    return localStorageService.get('hood_token');
  };

  this.first_name = function(){
    return localStorageService.get('hood_first_name');
  };

  this.last_name = function(){
    return localStorageService.get('hood_last_name');
  };

  this.gender = function(){
    return localStorageService.get('hood_gender');
  };

  this.id = function(){
    return localStorageService.get('hood_id');
  };

  this.locale = function(){
    return localStorageService.get('hood_locale');
  };

  this.profile_picture = function(){
    return localStorageService.get('hood_profile_picture');
  };

  this.age = function(){
    return localStorageService.get('hood_age');
  };

  this.authorization_header = function() {
    if(this.isAuthenticated()) {
      return { 'Authorization': 'Token token="' + this.hood_token() + '", id="' + this.id() + '"' };
    } else {
      return { 'Authorization': 'Token token="null"' };
    }
  };

  this.isAuthenticated = function(){
    return ( this.hood_token() !== null && this.id() !== null && this.hood_token().length !== 0 && this.id().length !== 0);
  };

  this.sign_out = function(){
    this.delete_all();
    location.reload();
  };
});
