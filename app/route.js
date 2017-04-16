angular.module("myApp")
.config(function($routeProvider){
	$routeProvider
		.when("/news", {
			templateUrl: "view/news.html"
		})
		.when("/intro", {
			templateUrl: "view/intro.html"
		})
		.when("/info", {
			templateUrl:"view/info.html"
		})
		.otherwise({redirectTo:"/news"});
});