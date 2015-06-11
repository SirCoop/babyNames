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
    'smart-table',
    //'ui.grid'
])
.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', function ($stateProvider, $httpProvider, $urlRouterProvider) {
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
                controller: 'HomeController'
                //resolve: {
                //    allNames: function (NameFactory) {
                //        return NameFactory.getNames();
                //    }
                //}
            });

}]);
