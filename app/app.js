/**
 * Created by Sir_Coop on 5/27/2015.
 */
'use strict';

//  name the angular app
var app = angular.module('babyNames', [
    'ngResource',
    'ui.router',
    'ngCookies',
    'angularSpinner',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.infiniteScroll'
])
.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', 'constants', function ($stateProvider, $httpProvider, $urlRouterProvider, constants) {
    'use strict';

        var previousPath;

        //  to catch unmatched urls
        $urlRouterProvider.otherwise('/home');
        $urlRouterProvider.rule(function ($injector, $location) {
            previousPath = $location.path();

            if ($location.path().match(/^\/404$/)) {
                var data = $injector.get('$state').get('index').data;
                data.error = 404;
                data.errorUrl = previousPath;
                $location.replace().path('/error');
            }
        });

        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                templateUrl: "/views/tpls/main.html",
                controller: 'MainController'

            })
            .state('app.home', {
                url: '/home',
                templateUrl: '/views/tpls/home.html',
                controller: 'HomeController',
                resolve: {
                    //nameData: function (NameFactory) {
                    //    return NameFactory.getNames(constants.namesDirectory);
                    //}

                    //allNames: function (NameFactory) {
                    //    return NameFactory.getNamesFromDB(constants.findAll);
                    //}
                }
            })
            .state('app.allNames', {
                url: '/names/all',
                templateUrl: '/views/tpls/allNames.html',
                controller: 'AllNamesController',
                resolve: {
                    allNames: function (NameFactory) {
                        return NameFactory.getAllNames(constants.getAllNames);
                    }
                }
            })
            .state('app.letter', {
                url: '/names/all/:letter',
                templateUrl: '/views/tpls/letter.html',
                controller: 'LetterController',
                resolve: {
                    //nameData: function (NameFactory) {
                    //    return NameFactory.getNames(constants.namesDirectory);
                    //}
                    namesByLetter: function (NameFactory, $stateParams) {
                        return NameFactory.getNamesByLetter(constants.getNamesByLetter, $stateParams.letter);
                    }

                    //namesStartingWith: function (NameFactory) {
                    //    return NameFactory.namesStartingWith(constants.findAll);
                    //}
                }
            });


}]);
