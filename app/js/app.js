'use strict';

angular.module('demoApp', ['ui.router']);

angular.module('demoApp').config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html',
      controller : 'HomeCtr'
  });

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'partials/about.html'
  });

  $stateProvider
    .state('post', {
      absolute: true,
      url: '/post',
      templateUrl: 'partials/post.html'
  });

  $stateProvider
    .state('post.view', {
      url: '/:postId',
      templateUrl: 'partials/view.html',
      controller : 'ViewCtr'
  });
});
