angular.module('demoApp')
    .service('PostService', function ($http) {
        // For testing purpose we are using http://jsonplaceholder.typicode.com
        var serviceUrl = 'http://jsonplaceholder.typicode.com';

        this.getAllPosts = function () {
            return $http.get(serviceUrl + '/posts');
        };

        this.getPost = function (id) {
            return $http.get(serviceUrl + '/posts/' + id);
        };

        this.getPostComments = function (id) {
            return $http.get(serviceUrl + '/posts/' + id + '/comments');
        };
    });
