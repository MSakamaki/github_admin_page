(function() {
    'use strict';
    var app = angular.module('githubAdminPageApp');

    app.directive('myissues', function () {
        var directive = {
            restrict :'E',
            templateUrl : 'views/mypage.html'
          };
        return directive;
      })
    .directive('orgissues', function () {
        var directive = {
            restrict :'E',
            controller: 'orgpage',
            templateUrl : 'views/orgpage.html'
          };
        return directive;
      });
  })();