(function() {
    'use strict';

    function MenuController() {
        var vm = this;
        vm.isNavCollapsed = true;
    }

    MenuController.$inject = [];

    angular.module('app.home')
        .controller('MenuController', MenuController);

})();