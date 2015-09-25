define(['angular', 'ngRoute', 'ngAnimate', 'fox.scrollReveal', 'AboutFactory', 'AboutController'],
    function (angular, ngRoute, ngAnimate, foxScrollReveal,AboutFactory, AboutController) {        

    angular.module('mainSiteModule', ['ngRoute', 'fox.scrollReveal', 'ngAnimate', 'AboutFactory', 'AboutController'])
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

    return angular.module('mainSiteModule');
});
