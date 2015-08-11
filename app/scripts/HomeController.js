/**
 * Created by Sir_Coop on 6/1/2015.
 */
'use strict';

app.controller('HomeController', ['$rootScope','$scope', '$state', 'NameFactory', 'constants', function ($rootScope, $scope, $state, NameFactory, constants) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //console.log('data in home controller ', allNames);

    //$scope.nameData = allNames;
    $scope.yearData = '';

    $scope.letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    $scope.nameSearch = '';

    $scope.searchName = function () {
        console.log('submitted name: ', capitalizeFirstLetter($scope.nameSearch));
        $state.go('app.search', {search: capitalizeFirstLetter($scope.nameSearch)});
    };

}]);


