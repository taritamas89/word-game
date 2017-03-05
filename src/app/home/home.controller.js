(function() {
    'use strict';

    function HomeController($uibModal, $state, userservice, utilservice) {
        var vm = this;
        vm.showLoading = false;
        vm.user = null;

        vm.startButtonClick = startButtonClick;
        vm.getUserByUsername = getUserByUsername;
        vm.createUser = createUser;

        var username = utilservice.getCookie("word-game-username");
        if (username) {
            vm.showLoading = true;
            vm.getUserByUsername(username);
        }

        //function declarations
        function startButtonClick() {
            if (vm.user) {
                $state.go("game");
            } else {
                openUserModal();
            }
        }

        function openUserModal() {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'UserModalController',
                controllerAs: 'userModal',
                templateUrl: 'app/user/user-modal.html'
            });

            modalInstance.result.then(function(user) {
                vm.showLoading = true;
                vm.getUserByUsername(user.username).then(
                    function(data) {
                        if (!data) {
                            vm.showLoading = true;
                            vm.createUser(user).then(
                                function() {
                                    utilservice.setCookie("word-game-username", user.username);
                                    $state.go("game");
                                });
                        }
                    });
            });
        }

        function getUserByUsername(username) {
            return userservice.getUserByUsername(username)
                .then(function(data) {
                    vm.showLoading = false;
                    if (data) {
                        vm.user = data;
                    }
                    return vm.user;
                });
        }

        function createUser(user) {
            return userservice.createUser(user.username, user.name)
                .then(function(data) {
                    vm.showLoading = false;
                    // return vm.user;
                });
        }
    }

    HomeController.$inject = [
        '$uibModal',
        '$state',
        'userservice',
        'utilservice'
    ];

    angular.module('app.home')
        .controller('HomeController', HomeController);

})();