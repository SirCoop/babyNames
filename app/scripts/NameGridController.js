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
    //$scope.nameGridOptions = gridConfig;
    //
    //$scope.nameGridOptions.data = newArr.slice(-300000);
    //
    //console.log('$scope.nameGridOptions.data ', $scope.nameGridOptions.data);
    ////$scope.totalNamesForCurrentYears = $scope.nameGridOptions.data.length;
    ////$scope.year = $scope.nameGridOptions.data[134].year;
    //
    //$scope.totalNamesForCurrentYear = $scope.nameGridOptions.data.length;
    //$scope.year = $scope.nameGridOptions.data[0].year;


}]);