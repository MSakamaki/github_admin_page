'use strict';

angular.module('githubAdminPageApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    var ghParameter={};
    $scope.ghlogin=function(){
      ghParameter.state='open';
      if ($scope.ghapptoken) {
        ghParameter.oauth_token=$scope.ghapptoken;
      }
      $scope.$broadcast('ghLogin', ghParameter);
    };
  }]);
