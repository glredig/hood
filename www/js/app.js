var app = angular.module('hood', ['ionic', 'openfb', 'leaflet-directive']);

app.run(function ($rootScope, $state, $ionicPlatform, $window, OpenFB) {

  OpenFB.init('1449005538698348');

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(window.cordova){
      cordova.plugins && cordova.plugins.Keyboard && cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
  });

  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name !== "app.login" && toState.name !== "app.logout" && !$window.sessionStorage['fbtoken']) {
      $state.go('app.login');
      event.preventDefault();
    }
  });

  $rootScope.$on('OAuthException', function() {
    $state.go('app.login');
  });

});

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: "AppCtrl"
    })

    .state('app.login', {
        url: "/login",
        views: {
            'menuContent': {
                templateUrl: "templates/login.html",
                controller: "LoginCtrl"
            }
        }
    })

    .state('app.logout', {
        url: "/logout",
        views: {
            'menuContent': {
                templateUrl: "templates/logout.html",
                controller: "LogoutCtrl"
            }
        }
    })

    .state('app.messages', {
      url: "/messages",
      views: {
        'menuContent' :{
          templateUrl: "templates/messages.html",
          controller: 'MessagesCtrl'
        }
      }
    })

    .state('app.message', {
      url: "/message/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/message.html",
          controller: 'MessageCtrl'
        }
      }
    })

    .state('app.performers', {
      url: "/performers",
      views: {
        'menuContent' :{
          templateUrl: "templates/performers.html",
          controller: 'PerformersCtrl'
        }
      }
    })

    .state('app.performer', {
      url: "/performers/:performerId",
      views: {
        'menuContent' :{
          templateUrl: "templates/performer.html",
          controller: 'PerformerCtrl'
        }
      }
    });
  // fallback route
  $urlRouterProvider.otherwise('/app/login');
});
