'use strict';

var path = require('path'),
    mock = require('protractor-http-mock'),
    config = require('../e2e.config'),
    basePath = path.resolve(__dirname, '..'),
    mockHttpPath = path.resolve(basePath, 'fixtures', 'mockHttp'),
    mockDataDir = path.resolve(basePath, config.mockDataDir),
    mockEntity = require(path.join(mockDataDir, 'entity.json')),
    mockServiceDir = path.join(mockDataDir, 'services');

var postService = require(path.join(mockHttpPath, 'postservice.js'));

var mockPostService = new postService(mockEntity, mockServiceDir);

module.exports = {
    reset: function () {
        mock.teardown();
    },

    /**
     * Mock user authentication.
     *
     * @param {string} type Mock type eg: fail, success
     */
    mockAll: function (type) {
        var type = type || 'success',
            httpMocks = [];

        httpMocks = httpMocks.concat(
            mockPostService.getAllPosts(type)

        );

        mock(httpMocks);
    },
};
