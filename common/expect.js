var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var chaiWebdriver = require('chai-webdriver');
chai.use(chaiAsPromised);
chai.use(chaiWebdriver(browser));
module.exports = chai.expect;
