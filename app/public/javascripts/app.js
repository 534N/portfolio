var myApp = angular.module('myApp', [
	'ngRoute',
	'lumx'
]);

angular.module('myApp')
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/', {

				})
				.when('/map', {
					templateUrl: '../partials/map',
					controller: 'mapCtrl'
				});
		}
	]);