/**
 * Created by Sir_Coop on 6/21/2015.
 */
/**
 * Created by Sir_Coop on 6/1/2015.
 */
'use strict';

app.controller('AllNamesController', ['$rootScope','$scope','NameFactory', 'constants', 'allNames', function ($rootScope, $scope, NameFactory, constants, allNames) {

    //console.log('data in home controller ', allNames);

    $scope.nameData = allNames;
    //$scope.yearData = '';



}]);


