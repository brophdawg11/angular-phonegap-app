;(function () {

  angular.module('app', []).run(function () {
    console.log("This won't run until deviceready has fired");
  });

  angular.module('app').controller('ctrl', [ '$scope', function ($scope) {
    $scope.content = "This is the content";
  }]);

})();
