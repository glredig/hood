app.service('CurrentUser', function(localStorageService) {

  this.store = function(token, email, first_name){
    localStorageService.add('hood_token', token);
    localStorageService.add('hood_email', email);
    localStorageService.add('hood_first_name', first_name);
  }

  this.delete_all = function() {
    localStorageService.clearAll();
  }

  this.hood_token = function(){
    return localStorageService.get('hood_token');
  }

  this.email = function(){
    return localStorageService.get('hood_email');
  }

  this.first_name = function(){
    return localStorageService.get('hood_first_name');
  }

  this.authorization_header = function() {
    if(this.isAuthenticated()) {
      return { 'Authorization': 'Token token="' + this.hood_token() + '", email="' + this.email() + '"' };
    } else {
      return { 'Authorization': 'Token token="null"' };
    }
  };

  this.isAuthenticated = function(){
    var token = window.sessionStorage['fbtoken'];
    return (token != null);


    // return ( this.hood_token() != null && this.email() != null && this.hood_token().length != 0 && this.email().length != 0)
  }

  this.update = function(user){
    localStorageService.add('hood_email', user.email);
    localStorageService.add('hood_first_name', user.first_name);
  }

  this.sign_out = function(){
    this.delete_all();
    location.reload()
  }
});
