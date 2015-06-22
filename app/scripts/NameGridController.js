/**
 * Created by Sir_Coop on 6/12/2015.
 */
'use strict';

app.controller('NameGridController', ['$rootScope','$scope','NameFactory', 'constants', 'gridConfig', '$q', '$timeout', function ($rootScope, $scope, NameFactory, constants, gridConfig, $q, $timeout) {

    //console.log('allNames in controller ', allNames);

    //var newArr = [];
    //
    //var splitDataByYear = function (data) {
    //    data.forEach(function (year) {
    //        year.names.forEach(function (nameObj) {
    //            newArr.push(nameObj);
    //        });
    //    });
    //};
    //
    //splitDataByYear($scope.nameData);
    //
    $scope.nameGridOptions = gridConfig;
    //
    $scope.nameGridOptions.data = $scope.nameData;
    $scope.nameGridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
    };
    console.log('$scope.gridApi ', $scope.gridApi);

    //console.log('$scope.nameGridOptions.data.length ', $scope.nameGridOptions.data.length);
    $scope.totalNamesForCurrentYears = $scope.nameGridOptions.data.length;
    $scope.year = '2011';

    $scope.showGridApi = function () {
        console.log('grid api ', $scope.gridApi);
    };

    //$scope.totalNamesForCurrentYear = $scope.nameGridOptions.data.length;
    //$scope.year = $scope.nameGridOptions.data[0].year;


}]);