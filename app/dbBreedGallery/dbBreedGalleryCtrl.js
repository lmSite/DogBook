
app.controller('dbBreedGalleryCtrl', function ($scope, $sce, $routeParams, dbGallerySrv) {
    $scope.breedImages = [];

    // sessionStorage.selectedImg

    $scope.breed = $routeParams.breed;
    var apihUrl = $sce.getTrustedUrl('https://dog.ceo/api/breed/' + $scope.breed + '/images');

    dbGallerySrv.getAll(apihUrl).then(function (apiResult) {
        $scope.breedImages = apiResult;

    });
    $scope.showImg = function (img) {
        sessionStorage.selectedImg = img;


    }

})
