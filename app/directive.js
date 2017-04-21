angular.module("myApp")
.directive("showmore", function(){
	return {
		restrict: 'E',
		template:   '<ul class="nav">'+
						'<li><a href="" class="showMore" ng-show="show" ng-repeat="x in showMore">{{x}}</a></li>'+
					'</ul>'
	};
});