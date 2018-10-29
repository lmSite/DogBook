
app.controller('homeCtrl', function($scope, $location) {
    $scope.enter = function() {
      $location.path("/dogs-gallery");
    }
  })