'use strict';

/**
 * @ngdoc function
 * @name mejoruaSmartphoneAngularApp.controller:IssuedetailCtrl
 * @description
 * # IssuedetailCtrl
 * Controller of the mejoruaSmartphoneAngularApp
 */
angular.module('mejoruaSmartphoneAngularApp')
    .controller('IssuedetailCtrl', ['$scope', '$routeParams', 'IssueDAO', function($scope, $routeParams, IssueDAO) {

        $scope.issueId = $routeParams.issueId;

        $scope.init = function init() {
        	$scope.issue = $scope.getIssueById($scope.issueId);	
        }

        $scope.getIssueById = function getIssueById(issueId) {
        	IssueDAO.getById(issueId).then(function (issue){
        		$scope.issue = issue;
        	});
        }

        $scope.init();
    }]);