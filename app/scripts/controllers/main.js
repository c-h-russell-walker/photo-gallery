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
    $scope.galleryImages = [
      {
       id: 0,
       name: 'Spinning cat',
       src: 'http://24.media.tumblr.com/tumblr_ljx8e8W6821qh28hmo1_400.gif'
      },
      {
       id: 1,
       name: 'Black knight',
       src: 'http://30.media.tumblr.com/tumblr_m32sjwOb3h1qjjr1oo1_1280.png'
      },
    ];
    
    $scope.mainImage = $scope.galleryImages[0];

    $scope.updateMainImage = function updateMainImage(imageId) {
     $scope.mainImage = $scope.galleryImages[imageId];
    };

    $scope.isActiveThumbnail = function isActiveThumbnail(imageId) {
     console.log($scope.mainImage.id);
     return $scope.mainImage.id === imageId;
    };
  });
