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

        getNamesFromDB: function (dir) {
            console.log('dir ', dir);
            return $http.get(dir).then(function (res) {
                var data = res.data;
                console.log('data in NameFactory ', data);
                return data;
            });
        }
    }
}]);