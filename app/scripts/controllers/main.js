'use strict';

/**
    * @ngdoc function
    * @name photoGalleryApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the photoGalleryApp
    */
angular.module('photoGalleryApp')
    .controller('MainCtrl', function($scope) {

        $scope.galleryImages = [];

        function init() {
            // TODO - confirm we want to use a list since the next/prev arrows are dependent on zero based indices
            // TODO - after that, fetch images from an API
            var fetchedImages = [
                'http://24.media.tumblr.com/tumblr_ljx8e8W6821qh28hmo1_400.gif',
                'http://30.media.tumblr.com/tumblr_m32sjwOb3h1qjjr1oo1_1280.png',
                'http://25.media.tumblr.com/tumblr_m43tsfAAfa1qhwmnpo1_1280.jpg'
            ];

            fetchedImages.forEach(function addImagesToList(element, index) {
                $scope.galleryImages.push({
                        id: index,
                        src: element
                });
            });

            $scope.mainImage = $scope.galleryImages[0];
        }

        $scope.galleryLength = function galleryLength() {
            return $scope.galleryImages.length;
        };

        $scope.lastImageId = function lastImageId() {
            return $scope.galleryLength() - 1;
        };

        $scope.matchMainImage = function matchMainImage(imageId) {
            return $scope.mainImage.id === imageId;
        };

        $scope.updateMainImage = function updateMainImage(imageId) {
            $scope.mainImage = $scope.galleryImages[imageId];
        };

        $scope.incrementGalleryImage = function incrementGalleryImage() {
            if ($scope.mainImage.id === $scope.lastImageId()) {
                return false;
            }
            $scope.mainImage = $scope.galleryImages[$scope.mainImage.id + 1];
        };

        $scope.decrementGalleryImage = function decrementGalleryImage() {
            if ($scope.mainImage.id === 0) {
                return false;
            }
            $scope.mainImage = $scope.galleryImages[$scope.mainImage.id - 1];
        };

        init();
    });
