/**
 * Created by Sir_Coop on 6/1/2015.
 */
'use strict';

app.controller('HomeController', ['$rootScope','$scope','NameFactory', 'constants', 'nameData', function ($rootScope, $scope, NameFactory, constants, nameData) {

    //console.log('data ', nameData);
    $scope.nameData = nameData;




        //NameFactory.getNames(constants.namesDirectory).success(function (data) {
        //
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
        //});

}]);


