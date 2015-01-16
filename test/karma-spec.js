describe('Test', function() {

  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_  ;
  }));

  describe('Controller', function () {

    var $scope, ctrl;

    // Set up $scope and controller before every test
    beforeEach(inject(function () {
      $scope = {};
      ctrl = $controller('ctrl', { $scope: $scope });
    }));

    it('should be defined', function () {
      expect(ctrl).toBeDefined();
    });

  });
});
