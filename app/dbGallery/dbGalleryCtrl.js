app.controller('dbGalleryCtrl', function ($scope, $sce, $location, $route, $http, dbGallerySrv) {



  $scope.breeds = [];
  $scope.breedsObjArr = [];


  function getBreeds() {
    var apihUrl = $sce.getTrustedUrl('https://dog.ceo/api/breeds/list');
    dbGallerySrv.getAll(apihUrl).then(function (apiResult) {
      $scope.breeds = apiResult;


    }).then(function () {
      $scope.breeds.forEach(element => {
        var apihUrl = $sce.getTrustedUrl('https://dog.ceo/api/breed/' + element + '/images/random');
        dbGallerySrv.getAll(apihUrl).then(function (apiResult) {
          $scope.breedsObjArr.push(dbGallerySrv.createNew(element, apiResult));
          // console.log("$scope.breedsObjArr: "+$scope.breedsObjArr); 
        });
      });
    }
    );
  }

  getBreeds();


  $scope.reloadLoc = function () {
    $route.reload();
  }

  $scope.openBreed = function (breedN) {
    $location.path("/dogs-gallery/" + breedN);
  }


});
