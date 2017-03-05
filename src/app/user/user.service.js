(function() {
    'use strict';

    function userservice(FIREBASE_BASE_URL, $http) {

        var service = {
            getUsers: getUsers,
            getUserByUsername: getUserByUsername,
            createUser: createUser
        };

        return service;

        //functions
        function getUsers() {
            return $http.get(FIREBASE_BASE_URL + '/users.json')
                .then(getUsersComplete)
                .catch(getUsersFailed);

            function getUsersComplete(response) {
                return response.data;
            }

            function getUsersFailed(error) {
                console.error('XHR Failed for getUsers.' + error.data);
            }
        }

        function getUserByUsername(username) {
            return $http.get(FIREBASE_BASE_URL + '/users/' + username + '.json')
                .then(getUserByUsernameComplete)
                .catch(getUserByUsernameFailed);

            function getUserByUsernameComplete(response) {
                return response.data;
            }

            function getUserByUsernameFailed(error) {
                console.error('XHR Failed for getUserByUsername.' + error.data);
            }
        }

        function createUser(username, name) {
            var user = {
                name: name,
                date: +new Date(),
                score: 0
            };
            return $http.put(FIREBASE_BASE_URL + '/users/' + username + '.json', user)
                .then(createUserComplete)
                .catch(createUserFailed);

            function createUserComplete(response) {
                return response.data;
            }

            function createUserFailed(error) {
                console.error('XHR Failed for createUser.' + error.data);
            }
        }
    }

    userservice.$inject = [
        'FIREBASE_BASE_URL',
        '$http'
    ];

    angular.module('app.user')
        .service('userservice', userservice);
})();