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
    $scope.nameGridOptions.onRegisterApi = function (gridApi) {
        gridApi.infiniteScroll.on.needLoadMoreData($scope, $scope.getDataDown);
        gridApi.infiniteScroll.on.needLoadMoreDataTop($scope, $scope.getDataUp);
        $scope.gridApi = gridApi;
    };
    $scope.nameGridOptions.data = [];

    //console.log('grid options ', $scope.nameGridOptions);
    //console.log('data in nameCtrl ', $scope.nameData[0]);
    //$scope.nameGridOptions.data = $scope.nameData[134].names;

    //  take only a portion of the data, circa 2006 to present
    //$scope.nameGridOptions.data = newArr.slice(-300000);

    //  *******try this for the sake of infinite scroll******
    newArr = newArr.slice(-300000);

    //console.log('newArr ', newArr);
    //$scope.totalNamesForCurrentYears = $scope.nameGridOptions.data.length;
    //$scope.year = $scope.nameGridOptions.data[134].year;

    $scope.totalNamesForCurrentYear = newArr.length
    $scope.year = newArr[0].year;

    //  *********try infinite scroll***********

    $scope.firstPage = 2;
    $scope.lastPage = 2;

    $scope.getFirstData = function() {
        var promise = $q.defer();
        //$http.get('/data/10000_complex.json')
        //    .success(function(data) {
                var newData = $scope.getPage(newArr, $scope.lastPage);
        $scope.nameGridOptions.data = newData;
                promise.resolve();
            //});
        return promise.promise;
    };

    $scope.getDataDown = function() {
        var promise = $q.defer();
        //$http.get('/data/10000_complex.json')
        //    .success(function(data) {
                $scope.lastPage++;
                var newData = $scope.getPage(newArr, $scope.lastPage);
                $scope.gridApi.infiniteScroll.saveScrollPercentage();
        $scope.nameGridOptions.data = $scope.nameGridOptions.data.concat(newData);
                $scope.gridApi.infiniteScroll.dataLoaded($scope.firstPage > 0, $scope.lastPage < 4).then(function() {$scope.checkDataLength('up');}).then(function() {
                    promise.resolve();
                });
            //})
            //.error(function(error) {
            //    $scope.gridApi.infiniteScroll.dataLoaded();
            //    promise.reject();
            //});
        return promise.promise;
    };

    $scope.getDataUp = function() {
        var promise = $q.defer();
        //$http.get('/data/10000_complex.json')
            //.success(function(data) {
                $scope.firstPage--;
                var newData = $scope.getPage(newArr, $scope.firstPage);
                $scope.gridApi.infiniteScroll.saveScrollPercentage();
        $scope.nameGridOptions.data = newData.concat($scope.nameGridOptions.data);
                $scope.gridApi.infiniteScroll.dataLoaded($scope.firstPage > 0, $scope.lastPage < 4).then(function() {$scope.checkDataLength('down');}).then(function() {
                    promise.resolve();
                });
            //})
            //.error(function(error) {
            //    $scope.gridApi.infiniteScroll.dataLoaded();
            //    promise.reject();
            //});
        return promise.promise;
    };


    $scope.getPage = function(data, page) {
        var res = [];
        for (var i = (page * 100); i < (page + 1) * 100 && i < data.length; ++i) {
            res.push(data[i]);
        }
        return res;
    };

    $scope.checkDataLength = function( discardDirection) {
        // work out whether we need to discard a page, if so discard from the direction passed in
        if( $scope.lastPage - $scope.firstPage > 3 ){
            // we want to remove a page
            $scope.gridApi.infiniteScroll.saveScrollPercentage();

            if( discardDirection === 'up' ){
                $scope.nameGridOptions.data = $scope.nameGridOptions.data.slice(100);
                $scope.firstPage++;
                $timeout(function() {
                    // wait for grid to ingest data changes
                    $scope.gridApi.infiniteScroll.dataRemovedTop($scope.firstPage > 0, $scope.lastPage < 4);
                });
            } else {
                $scope.nameGridOptions.data = $scope.nameGridOptions.data.slice(0, 400);
                $scope.lastPage--;
                $timeout(function() {
                    // wait for grid to ingest data changes
                    $scope.gridApi.infiniteScroll.dataRemovedBottom($scope.firstPage > 0, $scope.lastPage < 4);
                });
            }
        }
    };

    $scope.reset = function() {
        $scope.firstPage = 2;
        $scope.lastPage = 2;

        // turn off the infinite scroll handling up and down - hopefully this won't be needed after @swalters scrolling changes
        $scope.gridApi.infiniteScroll.setScrollDirections( false, false );
        $scope.nameGridOptions.data = [];

        $scope.getFirstData().then(function(){
            $timeout(function() {
                // timeout needed to allow digest cycle to complete,and grid to finish ingesting the data
                $scope.gridApi.infiniteScroll.resetScroll( $scope.firstPage > 0, $scope.lastPage < 4 );
            });
        });
    };

    $scope.getFirstData().then(function(){
        $timeout(function() {
            // timeout needed to allow digest cycle to complete,and grid to finish ingesting the data
            // you need to call resetData once you've loaded your data if you want to enable scroll up,
            // it adjusts the scroll position down one pixel so that we can generate scroll up events
            $scope.gridApi.infiniteScroll.resetScroll( $scope.firstPage > 0, $scope.lastPage < 4 );
        });
    });




}]);