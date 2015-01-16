describe('ng-phonegap-app test', function () {
  it('should bootstrap the app', function () {
    browser.get('http://localhost:8000/test/');
    expect(element(by.id('test-div')).getText()).toEqual("This is the content");
  });
});
