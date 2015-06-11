/**
 * Created by Sir_Coop on 6/1/2015.
 */
'use strict';

app.controller('HomeController', ['$rootScope','$scope','NameFactory', 'constants', 'usSpinnerService', '$timeout', function ($rootScope, $scope, NameFactory, constants, usSpinnerService, $timeout) {

    NameFactory.getNames(constants.namesDirectory).success(function (data) {

        var arr = [data[0]];
        $rootScope.totalYears = data.length;
        //console.log('arr ', arr);
        $scope.totalNamesForCurrentYear = arr[0].names.length;
        $scope.namesArr = [];
        arr.forEach(function (nameObj) {
            nameObj.names.forEach(function (child) {
                $scope.namesArr.push(child);
            });
        });

        //  create clone of data arr
        $scope.nameCollection = [].concat($scope.namesArr);

        //  Q: how do I remove tplUrl from tpl
        //  smart-table.js line 393
        //$scope.customTpl = constants.paginationTemplate;
        $scope.itemsPerPage = 18;



        $timeout(function() {
            //$rootScope.showLoader--;
            usSpinnerService.stop('loading-names');
        }, 100);


    });

}]);


