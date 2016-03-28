angular.module('starter.services', [])

    .service('Listado', function () {
        this.listados = [
            { title: 'Bar Palermo', id: 1 },
            { title: 'Bar Belgrano', id: 2 },
            { title: 'Restaurant Saavedra', id: 3 },
            { title: 'Restaurant Microcentro', id: 4 },
            { title: 'Bar Puerto Madero', id: 5 },
            { title: 'Bar Nuñez', id: 6 },
            { title: 'Bar Congreso', id: 7 }
        ];

    });