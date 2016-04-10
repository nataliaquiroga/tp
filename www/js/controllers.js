angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ListsCtrl', function($scope, Listado) {
    $scope.playlists = Listado.listados;

    $scope.getRatingArray = function(playlist){
        var range = [];
        for(var i=0;i<playlist.rating;i++) {
            range.push(i);
        }
        playlist.range = range;
        return playlist.range;
    };
})

.controller('FavoritesCtrl', function($scope, Favorites) {
    $scope.playlists = Favorites.favorites;
})

.controller('PlaylistCtrl', function($scope, $stateParams, Listado, Favorites, $cordovaGeolocation, Geoloc) {
    console.log(Geoloc);
    $scope.playlist = Listado.listados[$stateParams.playlistId-1];

    $scope.addFavorite = function(playlist){
        if (playlist.fav == 0) {
            Favorites.addFavorite(playlist);
            playlist.fav = 1;
            var element = document.getElementById('fav');
            element.innerHTML = 'Quitar de Favoritos';
            element.id = 'remove-fav';
            var elementj = angular.element(element);
            elementj.addClass('fav');
        } else {
            Favorites.removeFavorite(playlist);
            playlist.fav = 0;
            var element = document.getElementById('remove-fav');
            element.innerHTML = 'Agregar a Favoritos';
            element.id = 'fav';
            var elementj = angular.element(element);
            elementj.removeClass('fav');
        }
    };

    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

        var mylatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var latLng = new google.maps.LatLng($scope.playlist.lat, $scope.playlist.lng);
        dist = google.maps.geometry.spherical.computeDistanceBetween(mylatLng, latLng);
        km = (dist/1000).toFixed(1);
        console.log(km);
        $scope.playlist.distance = parseFloat(km);

        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

        google.maps.event.addListenerOnce($scope.map, 'idle', function(){

            var marker = new google.maps.Marker({
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                position: latLng
            });

            var infoWindow = new google.maps.InfoWindow({
                content: "Here I am!"
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open($scope.map, marker);
            });

        });

    }, function(error){
        console.log("Could not get location");
    });

    $scope.getRatingArray = function(playlist){
        var range = [];
        for(var i=0;i<playlist.rating;i++) {
            range.push(i);
        }
        playlist.range = range;
        return playlist.range;
    };

})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }, function(error){
        console.log("Could not get location");
    });
})



;
