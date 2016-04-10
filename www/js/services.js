angular.module('starter.services', [])

    .service('Listado', function ($cordovaGeolocation) {

        var options = {timeout: 10000, enableHighAccuracy: true};

        $cordovaGeolocation.getCurrentPosition(options).then(function(position){

            var mylatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var latLng = new google.maps.LatLng(-34.587246, -58.428354);
            dist = google.maps.geometry.spherical.computeDistanceBetween(mylatLng, latLng);
            km = (dist/1000).toFixed(1);
            console.log(km);

        }, function(error){
            console.log("Could not get location");
        });


        this.listados = [
            { id: 1,
                title: 'Dean & Dennys',
                address: 'Malabia 1591',
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
                city: 'Palermo',
                state: 'Ciudad de Buenos Aires',
                img: '',
                price: 2,
                rating: 3,
                phone: 123123,
                lat: '',
                lng: '',
                fav: 0 }
        ];

        angular.forEach(this.listados,function(place){

            var mylatLng = new google.maps.LatLng(-34.577246, -58.488354); //Tratar de conseguir la ubicación propia
            var latLng = new google.maps.LatLng(place.lat, place.lng);
            dist = google.maps.geometry.spherical.computeDistanceBetween(mylatLng, latLng);
            km = (dist/1000).toFixed(1);
            console.log(km);
            place.dist = km+' km';
        });


    })

    .service('Favorites', function () {
        this.favorites = [];

        this.addFavorite = function(place) {
            this.favorites.unshift(place);
        };

        this.removeFavorite = function(place) {
            favorites = this.favorites;
            i = 0;
            while (place.id != favorites[i].id) {
                i++;
            }
            this.favorites.splice(i, 1)
        };
    })


    .service('Geoloc', function($cordovaGeolocation) {
        var options = {timeout: 10000, enableHighAccuracy: true};
        var position = $cordovaGeolocation.getCurrentPosition(options).coords;
        this.Geoloc = position;
        //var mylatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //this.Geoloc = mylatLng;
    });