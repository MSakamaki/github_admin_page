"use strict";angular.module("githubAdminPageApp",["ngCookies","ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("githubAdminPageApp").controller("MainCtrl",["$scope",function(a){var b={};a.ghlogin=function(){b.state="open",a.ghapptoken&&(b.oauth_token=a.ghapptoken),a.$broadcast("ghLogin",b)}}]),function(){function a(a,b){a.orgrepo={};var c=function(a){console.log("org error!",a)},d={},e=function(b){console.log("org sucess!",b),b.forEach(function(b){console.log("org repors",b.name),a.orgrepo[b.id]={id:b.id,title:b.title,body:b.body,url:b.html_url,open_issues:b.open_issues,open_issues_count:b.open_issues_count}})};a.$on("ghLogin",function(f,g){d=g,d.oauth_token?(a.nonApiKey=!1,b({method:"GET",url:"https://api.github.com/issues",params:d}).success(e).error(c)):a.nonApiKey=!0})}var b="orgpage";angular.module("githubAdminPageApp").controller(b,a)}(),function(){function a(a,b){a.repo={},a.issues={};var c=function(a){console.log("error!",a)},d={},e=function(b){console.log("sucess!",b),b.forEach(function(b){0!==b.open_issues&&(console.log("repors",b.name),a.repo[b.id]={id:b.id,name:b.name,url:b.html_url,open_issues:b.open_issues,open_issues_count:b.open_issues_count})})};a.$on("ghLogin",function(f,g){d=g,b({method:"GET",url:"https://api.github.com/users/"+a.ghuser+"/repos",params:d}).success(e).error(c)})}var b="mypage";angular.module("githubAdminPageApp").controller(b,a)}(),function(){var a=angular.module("githubAdminPageApp");a.directive("myissues",function(){var a={restrict:"E",controller:"mypage",templateUrl:"views/mypage.html"};return a}).directive("orgissues",function(){var a={restrict:"E",controller:"orgpage",templateUrl:"views/orgpage.html"};return a})}();