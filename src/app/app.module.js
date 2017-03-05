(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ui.bootstrap',
            'ngAnimate',
            'ngCookies',
            'app.core',
            'app.home',
            'app.menu',
            'app.user'
        ]);
})();