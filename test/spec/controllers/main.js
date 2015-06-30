'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('photoGalleryApp'));

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
        MainCtrl.init();
        console.log(scope.galleryLength());
        expect(scope.galleryImages.length).toBe(scope.galleryLength());
    });

    it('should have set mainImage to first in galleryImages list', function () {
        MainCtrl.init();
        console.log(scope.galleryImages[0]);
        expect(scope.mainImage).toBe(scope.galleryImages[0]);
    });
});
