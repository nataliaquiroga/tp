angular.module('starter.services', [])

    .service('Listado', function () {
        this.listados = [
            { id: 1, title: 'Bar Palermo', address: 'Gorriti 5236', img: '', price: 2, rating: 3, phone: 123123, lat: '', lng: '', fav: 0 },
            { id: 2, title: 'Bar Belgrano', address: 'Gorriti 5236', img: '', price: 2, rating: 3, phone: 123123, lat: '', lng: '', fav: 0 },
            { id: 3, title: 'Restaurant Saavedra', address: 'Gorriti 5236', img: '', price: 2, rating: 3, phone: 123123, lat: '', lng: '', fav: 0 },
            { id: 4, title: 'Restaurant Microcentro', address: 'Gorriti 5236', img: '', price: 2, rating: 3, phone: 123123, lat: '', lng: '', fav: 0 },
            { id: 5, title: 'Bar Puerto Madero', address: 'Gorriti 5236', img: '', price: 2, rating: 3, phone: 123123, lat: '', lng: '', fav: 0 },
            { id: 6, title: 'Bar Nuñez', address: 'Gorriti 5236', img: '', price: 2, rating: 3, phone: 123123, lat: '', lng: '', fav: 0 },
            { id: 7, title: 'Bar Congreso', address: 'Gorriti 5236', img: '', price: 2, rating: 3, phone: 123123, lat: '', lng: '', fav: 0 }
        ];
    })

    .service('Favorites', function () {
        this.favorites = [{ id: 1, title: 'Bar Palermo', address: 'Gorriti 5236', img: '', price: 2, rating: 3, phone: 123123, lat: '', lng: '' }];

        this.addFavorite = function(place) {
            this.favorites.unshift(place);
        }
    });