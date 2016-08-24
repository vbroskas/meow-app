

// configure our routes
app.config(function($routeProvider, $locationProvider) {
	$routeProvider

	// route for the home page
		.when('/', {
			controller  : 'homeController',         //update name
			templateUrl : 'angular/views/home.php'  //update path
		})

		// route for the treats page
		.when('/treats', {
			controller  : 'treatsController',
			templateUrl : 'angular/views/home.php'
		})

		// route for the sign up page
		.when('/sign-up', {
			controller  : 'signupController',
			templateUrl : 'angular/views/home.php'
		})

		// route for the donate up page
		.when('/donate', {
			controller  : 'donateController',
			templateUrl : 'angular/views/home.php'
		})

		// otherwise redirect to home
		.otherwise({
			redirectTo: '/'
		});

	//use the HTML5 History API
	$locationProvider.html5Mode(true);
});