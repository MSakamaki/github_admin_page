(function () {
    'use strict';
    var controllerId = 'orgpage';
    angular.module('githubAdminPageApp').controller(controllerId, orgpage);

    function orgpage($scope) {
      $scope.orgrepo={};
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
          }
        });
      };
      $scope.$on('ghLogin', function(event, data) {
        console.log('++++ receiveing broadcast', data);
      });
    }
  })();