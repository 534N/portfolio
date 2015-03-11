var myController = angular.module('myController', []);

myController
	.controller('portfolioCtrl', ['$scope', '$location', '$routeParams', 
		function($scope, $location, $routeParams) {
			var subnavOptions = [
				{
					'name': 'HOME',
					'link': '/'
				},
				{
					'name': 'ANGULAR JS',
					'link': '/angularjs'
				}
			];

			var isActive = function(route) {
				var isActive = false;
				return (route == '/'+$location.path());
			}

			$scope.subnavOptions = subnavOptions;
			$scope.isActive = isActive;
		}
	])
	.controller('angularjsCtrl', ['$scope',
		function($scope) {
			

			var accordion_options = [
				{
					name: 'Basic User information',
					template: 'basicUserInfo'
				},
				{
					name: 'Select Plan',
					template: 'selectPlan'
				},
				{
					name: 'Configure Plan',
					template: 'configurePlan'
				},
				{
					name: 'Device Setup',
					template: 'deviceSetup'
				}
			];


			var list = [
				'Nunavut', 
				'Quebec', 
				'Northwest Territories', 
				'Ontario',
				'British Columbia', 
				'Alberta', 
				'Saskatchewan', 
				'Manitoba',
				'Yukon', 
				'Newfoundland and Labrador', 
				'New Brunswick',
				'Nova Scotia', 
				'Prince Edward Island'
			];


			$scope.list = list;
			$scope.accordion_options = accordion_options;
		}
	]);
	