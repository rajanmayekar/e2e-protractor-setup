var path = require('path'),
    serviceName = 'postservice';

function PostService (entity, mockServiceDir) {
    this.entity = entity;
    this.mockServiceDir = mockServiceDir;
}

PostService.prototype = {
    getAllPosts: function (type) {
        var i,
            servicePath,
            mockData,
            httpMethod = 'GET',
            mock = {
                "fail" : [],
                "success": []
            };

            servicePath = '/posts';
            mockData = require(path.join(
                this.mockServiceDir, serviceName,
                'getAllPosts.json'
            ));

            // In case to test failed response
            mock.fail.push({
                "request": {
                    "path": servicePath,
                    "method": httpMethod
                },
                "response": {
                    "status": 412,
                    "data": {
                        "code": 412
                    }
                }
            });

            mock.success.push({
                "request": {
                    "path":servicePath,
                    "method": httpMethod
                },
                "response": {
                    "status": 200,
                    "data": mockData
                }
            });
        }

        return mock[type];
    }
};

module.exports = PostService;
