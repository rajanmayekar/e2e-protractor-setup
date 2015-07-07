var path = require('path'),
    HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    chromeDriver: 'node_modules/chromedriver/bin/chromedriver',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // Boolean. If true, Protractor will connect directly to the browser Drivers
    // at the locations specified by chromeDriver and firefoxPath. Only Chrome
    // and Firefox are supported for direct connect.
    directConnect: true,

    // Use existing selenium local/remote
    // seleniumAddress:  http://localhost:4444/wd/hub
    // When run without a command line parameter, all suites will run. If run
    // with --suite=login only the patterns matched by the specified suites will
    // run.
    // @todo
    specs: ['specs/aui-login.js'],

    // The timeout in milliseconds for each script run on the browser. This should
    // be longer than the maximum time your application needs to stabilize between
    // tasks.
    allScriptsTimeout: 20000,

    jasmineNodeOpts: {
        defaultTimeoutInterval: 500000
    },

    multiCapabilities: [{
      'browserName': 'chrome'
    }, {
      'browserName': 'firefox'
    }],

    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `result/screnshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: './result/screenshots',
         takeScreenShotsOnlyForFailedSpecs: true,
         preserveDirectory: true,
         docTitle: 'E2E Result',
         docName: 'index.html',
         pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
            var currentDate = new Date(),
                dateString  = currentDate.getFullYear() + '-' +  currentDate.getMonth() + '-' + currentDate.getDate();

            return path.join(dateString, capabilities.caps_.browserName, descriptions.join('-'));
         }
      }));
   }
};
