/**
 * Created by Sir_Coop on 6/12/2015.
 */
'use strict';

app.controller('NameGridController', ['$rootScope','$scope','NameFactory', 'constants', 'gridConfig', '$q', '$timeout', function ($rootScope, $scope, NameFactory, constants, gridConfig, $q, $timeout) {

    var newArr = [];

    var splitDataByYear = function (data) {
        data.forEach(function (year) {
            year.names.forEach(function (nameObj) {
                newArr.push(nameObj);
            });
        });
    };

    splitDataByYear($scope.nameData);

    //console.log('newArr ', newArr);


    $scope.nameGridOptions = gridConfig;

    //  for infinite scroll
    //$scope.nameGridOptions.onRegisterApi = function (gridApi) {
    //    gridApi.infiniteScroll.on.needLoadMoreData($scope, $scope.getDataDown);
    //    gridApi.infiniteScroll.on.needLoadMoreDataTop($scope, $scope.getDataUp);
    //    $scope.gridApi = gridApi;
    //};

    $scope.nameGridOptions.data = newArr.slice(-300000);

    //  set page header based on data set



    //$scope.nameGridOptions.data = [];

    //console.log('grid options ', $scope.nameGridOptions);
    //console.log('data in nameCtrl ', $scope.nameData[0]);
    //$scope.nameGridOptions.data = $scope.nameData[134].names;

    //  take only a portion of the data, circa 2006 to present
    //$scope.nameGridOptions.data = newArr.slice(-300000);

    //  *******try this for the sake of infinite scroll******
    //newArr = newArr.slice(-300000);

    //  tell ui-grid how large the data set is so that it can set infinite scroll accordingly
    //$scope.nameGridOptions.totalItems = newArr.length;

    console.log('$scope.nameGridOptions.data ', $scope.nameGridOptions.data);
    //$scope.totalNamesForCurrentYears = $scope.nameGridOptions.data.length;
    //$scope.year = $scope.nameGridOptions.data[134].year;

    $scope.totalNamesForCurrentYear = $scope.nameGridOptions.data.length;
    $scope.year = $scope.nameGridOptions.data[0].year;

    //  *********try infinite scroll***********






}]);