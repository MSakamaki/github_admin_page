(function () {
    'use strict';
    var controllerId = 'mypage';
    angular.module('githubAdminPageApp').controller(controllerId, mypage);

    function mypage($scope, $http) {
      $scope.repo={};
      $scope.issues={};
      var httpError=function(data/*, status, headers, config*/) {
        console.log('error!', data);
      };
      var ghParameter={};
      var getGhReport = function(data /*, status, headers, config*/) {
        console.log('sucess!', data);
        data.forEach(function(repors){
          if (repors.open_issues !== 0) {
            console.log('repors',repors.name);

            $scope.repo[repors.id]={
              id: repors.id,
              name: repors.name,
              url: repors.html_url,
              open_issues: repors.open_issues,
              open_issues_count: repors.open_issues_count
            };
            /*
            $http({
              method: 'GET',
              url: 'https://api.github.com/repos/' + $scope.ghuser + '/' + repors.name + '/issues',
              params: ghParameter
            }).
            success(getGhIssues).
            error(httpError);*/
          }
        });
      };

      // var getGhIssues = function(data /*, status, headers, config*/) {
      //   console.log('issues sucess!', data);
      //   data.forEach(function(issues){
      //     $scope.issues[issues.id]=issues;
      //   });
      // };
      $scope.$on('ghLogin', function(event, data) {
        ghParameter=data;
        $http({
            method: 'GET',
            url: 'https://api.github.com/users/' + $scope.ghuser + '/repos',
            params: ghParameter
          }).
          success(getGhReport).
          error(httpError);
      });
    }
  })();