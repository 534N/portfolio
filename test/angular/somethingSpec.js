
describe('An angular js test suite', function() {
	beforeEach(module('ngResource', function($provide, $controllerProvider) {
		$provide.value('fooVal', 5);
		$controllerProvider.register('MainCtrl', function($scope) {
			$scope.hello = 'world';
			this.reverse = function(input) {
				return input.split('').reverse().join('');
			};
		});
	}));

	it('should have tests', function() {
		expect(true).toBe(true);
	});

	it('should inject dependencies', inject(function($resource, fooVal) {
		expect($resource).toBeDefined();
		expect(fooVal).toBe(5);
	}));

	it('should should compile angular expressions', inject(function($rootScope, $compile) {
		$rootScope.sum = 4;

		var expressions = '<p> 2 + 2 == {{sum}}</p>';
		var element = $compile(expressions)($rootScope);

		expect(element.html()).not.toContain('2 + 2 == 4');

		$rootScope.$digest();

		expect(element.html()).toContain('2 + 2 == 4');
		// expect
	}));

	it ('should provide controllers', inject(function($rootScope, $controller) {
		var $scope = $rootScope.$new(),
			ctrl = $controller('MainCtrl', {$scope : $scope});

		expect($scope.hello).toBe('world');
		expect(ctrl.reverse('foo')).toBe('oof');
	}));
});


describe('Angular route test suite', function() {
	beforeEach(module('myApp'));
	 
	it('should map to the correct controller and template', inject(function($route) {
		// 
		// default
		//
		expect($route.routes['/'].controller).toEqual('portfolioCtrl');
		expect($route.routes['/'].templateUrl).toEqual('../partials/portfolio');
		// 
		// resume
		//
		expect($route.routes['/resume'].controller).toEqual('resumeCtrl');
		expect($route.routes['/resume'].templateUrl).toEqual('../partials/resume');


	}));
});


// describe('tecApp', function() {
// 	var $httpBackend;

// 	beforeEach(module('myApp'));


// 	beforeEach(inject(function (_$httpBackend) {
// 		$httpBackend = _$httpBackend;
// 	}));


// 	afterEach(function() {
// 		$httpBackend.verifyNoOutstandingExpectation();
// 		$httpBackend.verifyNoOutstandingRequest();
// 	})
// })
