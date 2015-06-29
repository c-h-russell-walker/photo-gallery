'use strict';

/**
    * @ngdoc function
    * @name photoGalleryApp.controller:MainCtrl
    * @description
    * # MainCtrl
    * Controller of the photoGalleryApp
    */
angular.module('photoGalleryApp')
    .controller('MainCtrl', function($scope, $http, $window) {

        $scope.galleryImages = [];
        var fetchedImages = [];

        function init() {
            // TODO - Can we clean up this global var implementation?
            $window.jsonFlickrFeed = function(data){
                /* jshint expr: true */ /* Needed for short-circuiting */
                data.items && data.items.forEach(function pushImages(element) {
                    fetchedImages.push(element.media.m);
                });
                addImages();
            };

            var url = 'http://api.flickr.com/services/feeds/photos_public.gne?callback=JSON_CALLBACK';
            $http.jsonp(url,
                {
                    params: {
                        tags: 'cats',
                        tagmode: 'any',
                        format: 'json'
                    }
                });
        }

        function addImages() {
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
            return $scope.mainImage && $scope.mainImage.id === imageId;
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
