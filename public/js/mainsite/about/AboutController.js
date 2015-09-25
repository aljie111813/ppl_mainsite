define(['angular', 'AboutFactory'], function (angular, AboutFactory) {

    angular.module('AboutController', []).controller('AboutController', ['$scope', 'AboutFactory', aboutController]);

    function aboutController($scope, AboutFactory) {
        $scope.pplCommittees = AboutFactory.getCommittees();
        $scope.devTeamMembers = AboutFactory.getDevTeamMembers();
    }

});