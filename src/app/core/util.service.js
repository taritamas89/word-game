(function() {
    'use strict';

    function utilservice($cookies) {

        var service = {
            getCookie: getCookie,
            setCookie: setCookie,
            removeCookie: removeCookie
        };

        return service;

        //functions
        function getCookie(key) {
            return $cookies.get(key);
        }

        function setCookie(key, value, expireDate) {
            var options = {};
            if (expireDate) {
                options.expires = expireDate;
            }
            $cookies.put(key, value, options);
        }

        function removeCookie(key) {
            $cookies.remove(key);
        }
    }

    utilservice.$inject = [
        '$cookies'
    ];

    angular.module('app.core')
        .service('utilservice', utilservice);
})();