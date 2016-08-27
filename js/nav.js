// JavaScript Document
$(document).ready(function(e) {
	
	var category_text = new Array("DIGE1993.COM","应用","读书","实验室");
	
	var app_link = new Array("app1.html","app2.html","app3.html","app_more.html");//对应“应用”栏目下的4个item的链接地址
	var book_link = new Array("#","#","#","#");//对应“读书”栏目下的4个item的链接地址
	var test_link = new Array("#","#","#","#");//对应“实验室”栏目下的4个item的链接地址
	var link_array = new Array(app_link,app_link,book_link,test_link);//上述12个链接组成的二维数组
	
	var app_text = new Array("应用1","应用2","应用3","···");//对应“应用”栏目下的4个item的文本
	var book_text = new Array("读书1","读书2","读书3","···");//对应“读书”栏目下的4个item的文本
	var test_text = new Array("产品1","产品2","产品3","···");//对应“实验室”栏目下的4个item的文本
	var link_text = new Array(app_text,app_text,book_text,test_text);//上述12个文本组成的二维数组
	
	//设置BODY属性
	$("body").css("margin","0");
	$("body").css("mpadding","0");
	$("body").css("min-width","1000px");
	$("body").css("background-color","black");
	
	//toolBar
	var toolBar = $("<div></div>");
	toolBar.attr("id","toolBar");
	
	var toolbar_mid = $("<div></div>");
	toolbar_mid.attr("id","toolBar_mid");
	
	for(var i = 0; i < 4; i++){
		var primary_category = $("<div></div>");
		primary_category.addClass("primary_category");
		primary_category.html(category_text[i]);
		toolbar_mid.append(primary_category);
	}
	toolBar.append(toolbar_mid);
	
	var banner = $("<div></div>");
	banner.attr("id","banner");
	
	var menu = $("<div></div>");
	menu.attr("id","menu");
	
	for(var i = 0; i < 4; i++){
		var menu_group = $("<div></div>");
		menu_group.addClass("menu_group");
		for(var j = 0 ; j < 4; j++){
			var menu_item = $("<div></div>");
			menu_item.addClass("menu_item");
			var a = $("<a></a>");
			a.attr("href",link_array[i][j]);
			a.html(link_text[i][j]);
			menu_item.append(a);
			menu_group.append(menu_item);
		}
		menu.append(menu_group);
	}
	banner.append(menu);
	
	var flame = $("<div></div>");
	flame.attr("id","flame");
	flame.css("background-image","url(images/thumbnail/18887.jpg)");
	
	$("body").prepend(flame);
	$("body").prepend(banner);
	$("body").prepend(toolBar);
	
	
	/*LOGO作特殊处理*/
	$(".primary_category").eq(0).html("<a href='index.html'>DIGE1993.COM</a>");
	$(".primary_category").eq(0).css("background-color","red");
	
	/*清空LOGO下面的导航条*/
	$(".menu_group").eq(0).empty();
	
	/*添加动画并绑定事件*/
	function banner_slide_down(){
		$("#banner").slideDown();
	}
	
	function banner_slide_up(){
		$("#banner").slideUp();
	}
	
	$(".primary_category").bind("mouseover",banner_slide_down);
	$("#banner").bind("mouseleave",banner_slide_up);
});