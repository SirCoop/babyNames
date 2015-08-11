/**
 * Created by Sir_Coop on 6/1/2015.
 */
'use strict';

app.factory('NameFactory', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        //getNames: function (dir) {
        //    return $http.get(dir).then(function (res) {
        //        return res.data;
        //    });
        //}

        getAllNames: function (dir) {
            console.log('retrieving all names from ', dir);
            return $http.get(dir).then(function (res) {
                console.log('received all names');
                return res.data;
            });
        },
        getNamesByLetter: function (dir, letter) {
            console.log('retrieving names for the letter ' + letter);
            console.log(dir + letter);

            return $http.get(dir + letter).then(function (res) {
                console.log('received all names starting with ' + letter);
                return res.data;
            });
        },
        getNamesBySearch: function (dir, name) {
            console.log('retrieving name ', name);
            console.log('dir + name = ', dir + name);
            return $http.get(dir + name).then(function (res) {
                console.log('returning name ', name);
                return res.data;
            });
        }

    }
}]);