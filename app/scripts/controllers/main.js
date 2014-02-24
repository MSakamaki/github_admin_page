'use strict';

angular.module('githubAdminPageApp')
  .controller('MainCtrl', function ($scope, $http) {
    var httpError=function(data/*, status, headers, config*/) {
      console.log('error!', data);
    };
    var getGhReport = function(data /*, status, headers, config*/) {
      console.log('sucess!', data);
      data.forEach(function(repors){
        if (repors.open_issues !== 0) {
          console.log('repors',repors.name);
          $http({
              method: 'GET',
              url: 'https://api.github.com/repos/' + $scope.ghuser + '/' + repors.name + '/issues?state=open'
            }).
          success(getGhIssues).
          error(httpError);
        }
      });
    };

    var getGhIssues = function(data /*, status, headers, config*/) {
      console.log('issues sucess!', data);
      data.forEach(function(repors){
        console.log('issues',repors);
      });
    };

    $scope.ghlogin=function(){
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + $scope.ghuser + '/repos'
          }).
        success(getGhReport).
        error(httpError);
      };
  });
