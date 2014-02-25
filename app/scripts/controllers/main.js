'use strict';

angular.module('githubAdminPageApp')
  .controller('MainCtrl', function ($scope, $http) {
    var ghParameter={};
    $scope.ghlogin=function(){
      ghParameter.state='open';
      if ($scope.ghapptoken) {
        ghParameter.oauth_toke=$scope.ghapptoken;
      }
      console.log('AlloAllo');
      $scope.$broadcast('ghLogin', ghParameter);
    };
  });
