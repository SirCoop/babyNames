/**
 * Created by Sir_Coop on 6/21/2015.
 */
/**
 * Created by Sir_Coop on 6/12/2015.
 */
'use strict';

app.controller('LetterController', ['$rootScope','$scope','NameFactory', 'constants', 'gridConfig', '$q', '$timeout', 'namesByLetter', 'letter', function ($rootScope, $scope, NameFactory, constants, gridConfig, $q, $timeout, namesByLetter, letter) {

    console.log('letter controller active');
    $scope.totalNamesByLetter = namesByLetter.length;

    $scope.nameData = namesByLetter;
    console.log('names by letter ', $scope.nameData);

    $scope.letter = letter;

}]);