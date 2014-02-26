(function () {
    'use strict';
    var controllerId = 'orgpage';
    angular.module('githubAdminPageApp').controller(controllerId, ['$scope','$http',orgpage]);

    function orgpage($scope, $http) {
      $scope.orgrepo={};
      var httpError=function(data/*, status, headers, config*/) {
        console.log('org error!', data);
      };
      var ghParameter={};
      var getGhReport = function(data /*, status, headers, config*/) {
        console.log('org sucess!', data);
        data.forEach(function(repors){
          console.log('org repors',repors.name);
          $scope.orgrepo[repors.id]={
            id: repors.id,
            title: repors.title,
            body: repors.body,
            url: repors.html_url,
            open_issues: repors.open_issues,
            open_issues_count: repors.open_issues_count
          };
        });
      };
      $scope.$on('ghLogin', function(event, data) {
        ghParameter=data;
        if(ghParameter.oauth_token) {
          $scope.nonApiKey=false;
          $http({
              method: 'GET',
              // /user/issues
              url: 'https://api.github.com/issues',
              params: ghParameter
            }).
            success(getGhReport).
            error(httpError);
        } else {
          $scope.nonApiKey=true;
        }
      });
    }
  })();