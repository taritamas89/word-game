(function() {
    'use strict';

    function loadingIndicator() {
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            scope: {
                name: '@?',
                group: '@?',
                show: '=?',
                c: '=?',
                register: '@?',
                onLoaded: '&?',
                onShow: '&?',
                onHide: '&?'
            },
            templateUrl: 'app/core/loading-indicator/loading-indicator.html',
            link: function(scope, element, attrs) {}
        };
    }

    angular.module('app.core')
        .directive('loadingIndicator', loadingIndicator);

})();