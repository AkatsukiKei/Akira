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
		{name:"艾小", intro:"设计师，博客", avatar:"images/a1.jpg"},
		{name:"张琳", intro:"作者，杂志编辑", avatar:"images/a2.jpg"},
		{name:"李小明", intro:"艺术总监，电影剪辑", avatar:"images/a3.jpg"},
		{name:"野崎君", intro:"音乐家，运动员", avatar:"images/a4.jpg"}
	];
	$scope.show = false;
	$scope.showMore = ["设置栏目", "更多设置", "分割线"];
	$scope.str = "";
	$scope.info = [
		{name:"悠懒瑶瑶", info:"欢迎关注", avatar:"images/a5.jpg"},
		{name:"iG_Lucio", info:"hi(=′ー`) ,谢谢你的关注与支持！消息我有时间都会回复，我们会继续努力的！", avatar:"images/a6.jpg"},
		{name:"帅气可爱无敌迷人的妈妈的大", info:"谢谢你关注了我！！你真可爱！！", avatar:"images/a7.jpg"},
		{name:"小绝Drug补给站", info:"感谢关注(◍ ´꒳` ◍)恭喜你发现了一只小绝drug中毒重症患者！", avatar:"images/a8.jpg"},
		{name:"小绝QAQ", info:"感谢关注！！有什么想说的可以直接告诉我！！", avatar:"images/a9.jpg"}
	];
});
