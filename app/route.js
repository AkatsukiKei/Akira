angular.module("myApp")
.config(function($routeProvider){
	$routeProvider
		.when("/news", {
			templateUrl: "view/news.html"
		})
		.when("/profile", {
			templateUrl: "view/profile.html"
		})
		.when("/info", {
			templateUrl:"view/info.html"
		})
		.otherwise({redirectTo:"/news"});
});