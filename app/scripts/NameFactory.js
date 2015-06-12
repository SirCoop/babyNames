/**
 * Created by Sir_Coop on 6/1/2015.
 */
'use strict';

app.factory('NameFactory', ['$http', '$rootScope', function ($http, $rootScope) {
    return {
        getNames: function (dir) {
            return $http.get(dir).then(function (res) {
                return res.data;
            });
        }
    }
}]);