// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform, $state, $rootScope) { //$state y $rootScope son para la funcion que agrega una clase al nav bar
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    //Función para el nav bar
    $rootScope.$on('$stateChangeSuccess', function (evt, toState) {
        console.log('stateChangeSuccess');
        if (toState.changeColor) {
            $rootScope.changeColor = true;
        } else {
            $rootScope.changeColor = false;
        }

  });
})
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browsebar', {
      url: '/browsebar',
      views: {
        'menuContent': {
          templateUrl: 'templates/browsebar.html',
          controller: 'SearchCtrl'

        }
      }
    })

    .state('app.browsecafe', {
        url: '/browsecafe',
        views: {
          'menuContent': {
            templateUrl: 'templates/browsecafe.html'
          }
        }
      })
      .state('app.browserestaurant', {
          url: '/browserestaurant',
          views: {
            'menuContent': {
              templateUrl: 'templates/browserestaurant.html'
            }
          }
        })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'ListsCtrl'
        }
      }
    })

    .state('app.favorites', {
      url: '/favorites',
      views: {
          'menuContent': {
              templateUrl: 'templates/favorites.html',
              controller: 'FavoritesCtrl'
          }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    },
    changeColor: true
  })

    .state('app.map', {
        url: '/',
        templateUrl: 'templates/map.html',
        controller: 'MapCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');

});
