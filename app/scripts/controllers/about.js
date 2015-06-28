'use strict';

/**
 * @ngdoc function
 * @name photoGalleryApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the photoGalleryApp
 */
angular.module('photoGalleryApp')
    .controller('AboutCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
