/**
 * Created by Sir_Coop on 6/1/2015.
 */
'use strict';

app.controller('HomeController', ['$rootScope','$scope','NameFactory', 'constants', 'nameData', function ($rootScope, $scope, NameFactory, constants, nameData) {
    //console.log('data ', nameData);


    $scope.nameData = nameData;
    $scope.yearData = '';
}]);


