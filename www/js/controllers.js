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

.filter('startFrom', function () {
return function (input, start) {
if (input) {
			start = +start;
return input.slice(start);
		}
return [];
	};
})

.controller('SearchCtrl', ['$scope', 'filterFilter', function ($scope, filterFilter) {
$scope.items = [

  { id: 1,
      title: 'Dean & Dennys',
      address: 'Malabia 1591',
      category:'bar',
      city: 'Palermo',
      state: 'Ciudad de Buenos Aires',
      img: 'https://lh6.googleusercontent.com/proxy/c_6yUDGnmjnrC5zH4eaWWzjPniTkNlCrUmQSm_V-CZnv0hsMU6SBHO2bT1tMIogaGjgaDcBn9U9tfphPm9jDzsJ4ed45wgO4D8x0kfppYNNVoASlKN20e8ZQ4cnJbrXxW8xuuebr9O4w0Ostger6ffQnNHKtjw=w408-h298',
      price: 2,
      rating: 3,
      phone: 123123,
      lat: '-34.590836',
      lng: '-58.427021',
      fav: 0 },
  { id: 2,
      title: 'Victoria Brown Bar',
      address: 'Costa Rica 4803',
      category:'restaurant',
      city: 'Palermo',
      state: 'Ciudad de Buenos Aires',
      img: 'https://lh3.googleusercontent.com/proxy/V0lV07BRh8tfMQyTd3UK_reibHH3SlRHcIHt2dVaZFKoceIHvujWT-V8KMteSohhYFi_Sq5gnEuHR-sOEEqcBxTEcFvaBdFl_sS7S0Kt1K9-36tiNqw28LOQyC9M-cvtlE7P27cCYe9zDqU4CDV30bSMv5dq-Q=w408-h292',
      price: 2,
      rating: 3,
      phone: 123123,
      lat: '-34.587246',
      lng: '-58.428354',
      fav: 0 },
  { id: 3,
      title: 'Burger Joint',
      address: 'Jorge Luis Borges 1776',
      category:'bar',
      city: 'Palermo',
      state: 'Ciudad de Buenos Aires',
      img: 'https://lh3.googleusercontent.com/-sX2ZH3Q6LQI/VedvcNCDSuI/AAAAAAAAMJY/oWp8IBOkNFMHrei4_vDmgP-TizBmj2_Ng/w1896-h1422-no/2015-09-02.jpg',
      price: 2,
      rating: 3,
      phone: 123123,
      lat: '-34.587632',
      lng: '-58.428540',
      fav: 0 },
  { id: 4,
      title: 'Las Cabras',
      address: 'Fitz Roy 1795',
      category:'cafe',
      city: 'Palermo',
      state: 'Ciudad de Buenos Aires',
      img: 'https://lh6.googleusercontent.com/proxy/b7YRdvFiy6CjS3aGk4yDsSXHBkRnTYmA4GbZqbek8Nxe3gvKMMz2hPEs3WtQdfLfIVuJaJ51MGv7trKJ3A3s0hRS1TQ7WtwwQ75HzLPagH5WvQikpkl6OJHfVPTRT26LiBbiV8unwDzBt1HtMknIlqlasFJ4Ce8=w408-h305',
      price: 2,
      rating: 3,
      phone: 123123,
      lat: '-34.583438',
      lng: '-58.435410',
      fav: 0 },
  { id: 5,
      title: 'Casa Cruz',
      address: 'Uriarte 1658',
      category:'restaurant',
      city: 'Palermo',
      state: 'Ciudad de Buenos Aires',
      img: 'https://lh3.googleusercontent.com/proxy/xPabNsXbldkOWXQiDW1xOClB9CokKIjAE5AypBS5hqL7Og8Uc4Z3gGQz3UJAi9kRmnsy4pj7UwM1dO2qGkTIwTIaaatrqLa5THI3q-tcrFW_9s0DUVS8PmYtnL1RcBit0RTW_FeaP5jVQL0jAw5xX76ynEYWXH4=w408-h305',
      price: 2,
      rating: 3,
      phone: 123123,
      lat: '-34.587011',
      lng: '-58.431461',
      fav: 0 },
  { id: 6,
      title: 'Isabel',
      address: 'Uriarte 1664',
      category:'cafe',
      city: 'Palermo',
      state: 'Ciudad de Buenos Aires',
      img: 'https://lh3.googleusercontent.com/proxy/bcXUySvDWjtjgn5Ii6j4k9FQTgaQCDBqvYKtnXYWK0w6KQuqozzgJLpBeeQOKGSr3VwJZywwsb3Fe2QGGWBHd6zmbS368-OLi2oN0UmPVfx61XlzaN4nff0e6oFBgnEdYLAEt-deJm7qfMZq46cVymMUbWGsFlI=w408-h271',
      price: 2,
      rating: 3,
      phone: 123123,
      lat: '-34.587028',
      lng: '-58.431471',
      fav: 0 },
  { id: 7,
      title: 'Bar Congreso',
      address: 'Gorriti 5236',
      category:'restaurant',
      city: 'Palermo',
      state: 'Ciudad de Buenos Aires',
      img: '',
      price: 2,
      rating: 3,
      phone: 123123,
      lat: '',
      lng: '',
      fav: 0 },
  { id: 8,
      title: 'Las Cabrasdos',
      address: 'Fitz Roy 1795',
      category:'cafe',
      city: 'belgrano',
      state: 'Ciudad de Buenos Aires',
      img: 'https://lh6.googleusercontent.com/proxy/b7YRdvFiy6CjS3aGk4yDsSXHBkRnTYmA4GbZqbek8Nxe3gvKMMz2hPEs3WtQdfLfIVuJaJ51MGv7trKJ3A3s0hRS1TQ7WtwwQ75HzLPagH5WvQikpkl6OJHfVPTRT26LiBbiV8unwDzBt1HtMknIlqlasFJ4Ce8=w408-h305',
      price: 2,
      rating: 3,
      phone: 123123,
      lat: '-34.583438',
      lng: '-58.435410',
      fav: 0 }
  ];

$scope.search = {};
$scope.resetFilters = function () {
// needs to be a function or it won't trigger a $watch
$scope.search = {};
	};
// pagination controls
$scope.currentPage = 1;
$scope.totalItems = $scope.items.length;
$scope.entryLimit = 50; // items per page
$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
// $watch search to update pagination
$scope.$watch('search', function (newVal, oldVal) {
$scope.filtered = filterFilter($scope.items, newVal);
$scope.totalItems = $scope.filtered.length;
$scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
$scope.currentPage = 1;
	}, true);
}])


.controller('ItemCtrl', function($scope, items) {
    $scope.itemlists = Item.items;
    $scope.getRatingArray = function(itemlist){
        var range = [];
        for(var i=0;i<itemlist.rating;i++) {
            range.push(i);
        }
        itemlist.range = range;
        return itemlist.range;
    };
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
