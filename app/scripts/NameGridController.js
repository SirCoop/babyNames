/**
 * Created by Sir_Coop on 6/12/2015.
 */
'use strict';

app.controller('NameGridController', ['$rootScope','$scope','NameFactory', 'constants', function ($rootScope, $scope, NameFactory, constants) {

    NameFactory.getNames(constants.namesDirectory).success(function (data) {
        console.log('data ', data[0].names);
        $scope.nameData = data[0].names;
        $scope.totalNamesForCurrentYear = $scope.nameData.length;
        $scope.year = $scope.nameData[0].year;

    //    var arr = [data[0]];
    //    $rootScope.totalYears = data.length;
    //    //console.log('arr ', arr);
    //    $scope.totalNamesForCurrentYear = arr[0].names.length;
    //    $scope.namesArr = [];
    //    arr.forEach(function (nameObj) {
    //        nameObj.names.forEach(function (child) {
    //            $scope.namesArr.push(child);
    //        });
    //    });
    //
    //    //  create clone of data for smart-grid
    //    $scope.nameCollection = [].concat($scope.namesArr);
    //
    //    //  Q: how do I remove tplUrl from tpl
    //    //  smart-table.js line 393
    //    //$scope.customTpl = constants.paginationTemplate;
    //    $scope.itemsPerPage = 18;
    //
    //})
    //    .error(function (data, status) {
    //        console.error('Repos error', status, data);
    //    });

    });



    //$scope.nameData = [
    //    {
    //        "foo": "Cox",
    //        "lastName": "Carney",
    //        "company": "Enormo",
    //        "employed": true
    //    },
    //    {
    //        "foo": "Lorraine",
    //        "lastName": "Wise",
    //        "company": "Comveyer",
    //        "employed": false
    //    },
    //    {
    //        "foo": "Nancy",
    //        "lastName": "Waters",
    //        "company": "Fuelton",
    //        "employed": false
    //    }
    //];


}]);