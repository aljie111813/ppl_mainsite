angular.module('mainSiteModule').controller('AboutController', ['$scope', 'AboutFactory', aboutController]);

function aboutController($scope, AboutFactory) {
    $scope.pplCommittees = AboutFactory.getCommittees();
    $scope.devTeamMembers = AboutFactory.getDevTeamMembers();
}