var myApp = angular.module('myApp', [
	'ngRoute',
	'ngAnimate',
	'myController',
	'myDirective',
	'lumx'
]);

angular.module('myApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '../partials/portfolio',
					controller: 'portfolioCtrl'
				})
				.when('/angularjs', {
					templateUrl: '../partials/angularjs',
					controller: 'angularjsCtrl'
				})
				.when('/resume', {
					templateUrl: '../partials/resume',
					controller: 'resumeCtrl'
				});
		}
	]);