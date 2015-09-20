﻿angular.module('mainSiteModule', ['ngRoute', 'ngAnimate', 'fox.scrollReveal'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider

            .when('/about/', {
                templateUrl: 'public/views/aboutus.html',
                controller: 'AboutController'
            })
            .when('/', {
                templateUrl: 'public/views/home.html'
            }).
            when('/join', {
                templateUrl: 'public/views/join-the-cause.html'
            });




    }]);
