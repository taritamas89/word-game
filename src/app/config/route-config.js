(function() {
    'use strict';

    /**
     * This is the routeconfig.
     * @param  {Object} $urlRouterProvider watching $location, provider of AngularUI Router.
     * @param  {Object} $stateProvider handling states, provider of AngularUI Router.
     */
    function routeConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('', '/home');
        $urlRouterProvider.when('/', '/home');

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'menu@': {
                        templateUrl: "app/menu/menu.html"
                    },
                    'main@': {
                        templateUrl: "app/home/home.html"
                    }
                }
            });
    }

    angular
        .module('app')
        .config([
            '$urlRouterProvider',
            '$stateProvider',
            routeConfig
        ]);
})();