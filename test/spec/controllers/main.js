'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('photoGalleryApp'));

    var fetchedImages = [
        'http://24.media.tumblr.com/tumblr_ljx8e8W6821qh28hmo1_400.gif',
        'http://30.media.tumblr.com/tumblr_m32sjwOb3h1qjjr1oo1_1280.png',
        'http://25.media.tumblr.com/tumblr_m43tsfAAfa1qhwmnpo1_1280.jpg'
    ];

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope,
        });
    }));

    it('should attach a list of galleryImages to the scope', function () {
        scope.addImages(fetchedImages);
        expect(scope.galleryImages.length).toBe(scope.galleryLength());
    });

    it('should have set mainImage to first in galleryImages list', function () {
        scope.addImages(fetchedImages);
        expect(scope.mainImage).toBe(scope.galleryImages[0]);
    });
});
