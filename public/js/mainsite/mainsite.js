angular.module('mainSiteModule', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider

            .when('/about/', {
                templateUrl: 'public/views/aboutus.html',
                controller: 'AboutController'
            })
            .when('/', {
                templateUrl: 'public/views/home.html'
            });




    }]);
