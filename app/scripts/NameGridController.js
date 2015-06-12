/**
 * Created by Sir_Coop on 6/12/2015.
 */
'use strict';

app.controller('NameGridController', ['$rootScope','$scope','NameFactory', 'constants', 'gridConfig', function ($rootScope, $scope, NameFactory, constants, gridConfig) {

        $scope.nameGridOptions = gridConfig;
        //console.log('grid options ', $scope.nameGridOptions);
        //console.log('data in nameCtrl ', $scope.nameData[0]);
        $scope.nameGridOptions.data = $scope.nameData[0].names;
        $scope.totalNamesForCurrentYear = $scope.nameGridOptions.data.length;
        $scope.year = $scope.nameGridOptions.data[0].year;


}]);