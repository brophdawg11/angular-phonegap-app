describe('ng-phonegap-app test', function () {
  it('should add a todo', function () {
    browser.get('http://localhost:8000/test/');
    expect(element(by.id('test-div')).getText()).toEqual("This is the content");
  });
});
