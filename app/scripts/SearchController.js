/**
 * Created by Sir_Coop on 8/10/2015.
 */
'use strict';

app.controller('SearchController', ['$rootScope','$scope','NameFactory', 'constants', 'gridConfig', '$q', '$timeout', 'getNamesBySearch', 'name', function ($rootScope, $scope, NameFactory, constants, gridConfig, $q, $timeout, getNamesBySearch, name) {

    console.log('search controller active');
    //$scope.totalNamesByLetter = namesByLetter.length;
    //
    $scope.nameData = getNamesBySearch;
    //console.log('names by letter ', $scope.nameData);
    $scope.searchedName = name;
    console.log('$scope.searchedName ', $scope.searchedName);


}]);