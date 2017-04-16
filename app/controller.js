angular.module("myApp", ['ngRoute'])
.controller("mainCtrl", function($scope){
	$scope.user = {
		name: "鲁晓佳",
		intro: "some introduction here...",
		province: "河北",
		city: "石家庄",
		avatar: "images/a0.jpg"
	};
	$scope.myFans = [
		{name:"小王", intro:"设计师，博客", avatar:"images/a1.jpg", intimacy:20},
		{name:"张琳", intro:"作者，杂志编辑", avatar:"images/a2.jpg", intimacy:53},
		{name:"李小明", intro:"艺术总监，电影剪辑", avatar:"images/a3.jpg", intimacy:11},
		{name:"野崎君", intro:"音乐家，运动员", avatar:"images/a4.jpg", intimacy:89}
	];
	$scope.show = false;
});
