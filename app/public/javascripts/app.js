var myApp = angular.module('myApp', [
	'ngRoute',
	'lumx',
	'myController'
]);

angular.module('myApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '../partials/portfolio',
					controller: 'portfolioCtrl'
				})
				.when('/map', {
					templateUrl: '../partials/map',
					controller: 'mapCtrl'
				});
		}
	]);