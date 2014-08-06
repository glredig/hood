var app = angular.module('hood', ['ionic', 'openfb', 'leaflet-directive', 'LocalStorageModule']);

app.run(function ($rootScope, $state, $ionicPlatform, $window, OpenFB, CurrentUser) {

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
    if(toState.data && toState.data.requiresLogin){
      if(!CurrentUser.isAuthenticated()) {
        event.preventDefault();
        $state.go('app.login');
      }
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
        },
        data: {
          requiresLogin: false
        }
    })

    .state('app.logout', {
        url: "/logout",
        views: {
            'menuContent': {
                templateUrl: "templates/logout.html",
                controller: "LogoutCtrl"
            }
        },
        data: {
          requiresLogin: true
        }
    })

    .state('app.messages', {
      url: "/messages",
      views: {
        'menuContent' :{
          templateUrl: "templates/messages.html",
          controller: 'MessagesCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.message', {
      url: "/message/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/message.html",
          controller: 'MessageCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.performers', {
      url: "/performers",
      views: {
        'menuContent' :{
          templateUrl: "templates/performers.html",
          controller: 'PerformersCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    })

    .state('app.performer', {
      url: "/performers/:performerId",
      views: {
        'menuContent' :{
          templateUrl: "templates/performer.html",
          controller: 'PerformerCtrl'
        }
      },
      data: {
        requiresLogin: true
      }
    });
  // fallback route
  $urlRouterProvider.otherwise('/app/login');
});
