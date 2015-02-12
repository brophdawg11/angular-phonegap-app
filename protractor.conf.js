exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [ 'test/e2e-spec.js' ],

  // Remove protractor dot notation
  jasmineNodeOpts: {
    print: function () {}
  },

  // Add jasmine spec reporting format
  onPrepare: function () {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));
  }
};
