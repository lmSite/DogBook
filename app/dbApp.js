var app = angular.module("dbApp", ["ngRoute"]);
app.run(function($rootScope) {
    //$rootScope.movies = [];
});

app.config(function($routeProvider) {
   $routeProvider
    .when("/", {
        templateUrl : "app/home/home.html",
        controller : "homeCtrl"
    })
    .when("/dogs-gallery", {
        templateUrl : "app/dbGallery/dbGallery.html",
        controller : "dbGalleryCtrl"
    })
    // .when("/dogs-breed-gallery", {
    //     templateUrl : "app/dbBreedGallery/dbBreedGallery.html",
    //     controller : "dbBreedGalleryCtrl"
    // })
    .when('/dogs-gallery/:breed', {
        templateUrl: 'app/dbBreedGallery/dbBreedGallery.html',
        controller: 'dbBreedGalleryCtrl'
      })   
    .otherwise({
        template : "<h1>404</h1><p>sorry ... a problem is occured</p>"
    });
});


// .when('/movies/:movieId', {
//     templateUrl: 'app/movieDetails/movieDetails.html',
//     controller: 'movieDetailsCtrl'
//   })