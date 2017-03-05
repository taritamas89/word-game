(function() {
    'use strict';

    function UserModalController($uibModalInstance) {
        var vm = this;
        vm.start = start;
        vm.cancel = cancel;

        //functions
        function start() {
            //check if the username already exist
            //and start the game
            var newUser = {
                username: vm.username,
                name: vm.name
            };
            $uibModalInstance.close(newUser);
        }

        function cancel() {
            $uibModalInstance.dismiss('cancel');
        }
    }

    UserModalController.$inject = [
        '$uibModalInstance'
    ];

    angular.module('app.user')
        .controller('UserModalController', UserModalController);

})();