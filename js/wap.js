$(function(){
	$widthwindow = $(window).width();
	if($widthwindow < 350){	$("#zjgx .zjgxjj").fadeOut(500);}
	if($("#xinxi0").width()-$("#xinxi0 .xx ul li").width() <110){$("#xinxi0 .xx ul li").width($("#xinxi0").width()-110)}
	$("#zjlb .spage").click(function(){$("#zjlb .showpage").show(300);	$("#spagebg").css("opacity","0.7").fadeIn(500).height($("body").height());	});
	$("#spagebg").click(function(){$(this).fadeOut(700);$("#zjlb .showpage").hide(300);});
	$tjImgHight = $("#tj img").width();
	$("#tj img").height($tjImgHight*1.25);
});
$(function(){
	$("#header .you .search").click(function(){$("#search").slideToggle();	});
	$("#type").click(function(){if($("#type").text() == "书名"){$(this).html("作者");$("#searchType").val("author");}else{	$(this).html("书名");$("#searchType").val("articlename");}	});
	$("#formsearch").submit(function(){if($("#s_key").val() == "输入搜索词" || !$("#s_key").val()){alert("请输入搜索词！");return false;}});
})
$(function(){
  var b = "20px";var m = "16px"; var s = "12px";
  if($.cookie("fontSise")){font($.cookie("type"),$.cookie("fontSise"));}
  if($.cookie("light")){light($.cookie("light"));}  
  if($.cookie("huyan")){huyan_hy($.cookie("huyan"));}  
  $("#b").click(function(){font("#b",b);});
  $("#m").click(function(){font("#m",m);});
  $("#s").click(function(){font("#s",s);});
    $("#light").click(function(){huyan_hy("on");if($("#light").html()=="关灯"){$("#huyan").html("护眼");light("off")}else{light("on")}});
	$("#huyan").click(function(){light("on");if($("#huyan").html()=="护眼"){$("#light").html("关灯");huyan_hy("off")}else{huyan_hy("on")}});
 });

function huyan_hy(type){if(type=="off"){$("#huyan").html("关护眼");$("#zj").addClass("huyanbg");$("#zj .dise").removeClass("dise").removeClass("header").addClass("huyanbg_br").addClass("huyanbg").addClass("tmpc");$.cookie("huyan","off",{path:'/',expires:365})}else{$("#huyan").html("护眼");$("#zj").removeClass("huyanbg");$("#zj .tmpc").removeClass("huyanbg_br").removeClass("huyanbg").addClass("dise");$("header").addClass("header");$.cookie("huyan","on",{path:'/',expires:365})}}

function font(type,fontSize){
	$(type).addClass("fc").siblings().removeClass("fc");
	$.cookie("type",type,{path:'/',expires:365});
	$.cookie("fontSise",fontSize,{path:'/',expires:365});
	$("#nr").css("font-size",fontSize);
}
function light(type){if(type=="off"){$("#zj #light").html("开灯");$("#zj").removeClass("huyanbg").addClass("gd");$("#zj .dise").removeClass("dise").removeClass("header").addClass("gddise").addClass("tmpc");$.cookie("light","off",{path:'/',expires:365})}else{$("#zj #light").html("关灯");$("#zj").removeClass("gd");$("#zj .tmpc").removeClass("gddise").removeClass("huyanbg").addClass("dise");$("header").addClass("header");$.cookie("light","on",{path:'/',expires:365})}}

function zuoyoufy(url){
	window.location.href = url;
}
function Go(a) {
    window.location = a
}

function sj(a, b) {
    e = "/add.php?addbookcase=1&aid=" + a + "&ajax_request=1",
    $.get(e,
    function(a) {
        alert(a.replace("<br />", "").replace(/(\<br \/\>)/g, "\r\n"))
    })
}
function sq(a, b) {
    e = "/add.php?addmark=1&aid=" + a + "&cid=" + b + "&ajax_request=1",
    $.get(e,
    function(a) {
        alert(a.replace("<br />", "").replace(/(\<br \/\>)/g, "\r\n"))
    })
}
document.writeln("<script src='\/js\/ajax.js'><\/script>");
function login(){//开启登录
	uname = document.getElementById("username").value;
	upass = document.getElementById("userpass").value;
	_yyun_code = document.getElementById("_yyun_code").value;
	_17mb_login_save = document.getElementById("login_save").checked;
    doAjax("/login_go.php", "chname=" + uname + "&chpass=" + upass + "&_yyun_code=" + _yyun_code + "&_17mb_login_save=" + _17mb_login_save, "go_login", "POST", 0);
}
function go_login(t){
	t = t.replace(/\s/g,'');
	logintips = document.getElementById("logintips");
	if(t == "nocode"){
		logintips.innerHTML = "请输入验证码";
		reloadcode();
	}
	if(t == "err_code"){
		logintips.innerHTML = "验证码错误";
		reloadcode();
	}
	if(t == "nodata" ){
		logintips.innerHTML = "请输入帐号和密码";
		reloadcode();
	}
	if(t == "nologin" ){
		logintips.innerHTML = "帐号或密码错误，登录失败";
		reloadcode();
	}
	if(t == "yeslogin" ){
		doAjax("/ajax.php", "is_login=1", "is_login", "GET", 0);
	}
}

function is_login(t){
	var t = t.replace(/\s/g,'');
	if(t == "right"){
		document.getElementById("logintips").innerHTML = "登录成功！";
		var urlarray= new Array(); //定义一数组
		urlarray = document.URL.split("?url="); //字符分割
		url = urlarray[1]; 
		if(url){
			url = url.replace(/\%2F/g,"/");
			url = url.replace(/\%3A/g,":");
			url = url.replace(/\%23/g,"");
			url = url.replace(/\%3F/g,"?");
			url = url.replace(/\%3D/g,"=");
			url = url.replace(/\%26/g,"&");
			window.location.href = url;	
		}
		else{
			window.location.href = "/";	
		}
	}
	else{
		document.getElementById("logintips").innerHTML = "帐号或密码错误，登录失败！";	
	}
}

function register(){
	uname = document.getElementById("regname").value;
	upass = document.getElementById("regpass").value;
	uemail = document.getElementById("regemail").value;
	_yyun_code = document.getElementById("_yyun_code").value;
	doAjax("/register.php", "name=" + uname + "&ac=register&password=" + upass + "&repassword=" + uemail + "&captcha=" + _yyun_code, "go_register", "POST", 0);
}
function go_register(t){
	var t = t.replace(/\s/g,'');
	var tips = document.getElementById("logintips");
	if(t == "nocode"){
		tips.innerHTML = "请输入验证码";
	}
	if(t == "err_code"){
		tips.innerHTML = "验证码错误";
	}
	if(t == "nodata"){
		tips.innerHTML = "以上信息都必须输入";	
	}
	if(t == "bigname"){
		tips.innerHTML = "用户名太长！10个中问或者30个英文以内！";	
	}	
	if(t == "bigpass"){
		tips.innerHTML = "密码太长！16位以内！";	
	}	
	if(t == "bigemail"){
		tips.innerHTML = "邮箱太长！";	
	}	
	if(t == "emailerror"){
		tips.innerHTML = "邮箱格式错误！";	
	}
	if(t == "havename"){
		tips.innerHTML = "用户名已被注册！";	
	}
	if(t == "haveemial"){
		tips.innerHTML = "邮箱已被注册！";	
	}
	if(t == "yesregister"){
		tips.innerHTML = "注册成功并已经登录！";
		window.location.href = "/";	
	}		
}

function shuqian(aid,cid,urlchapter){
	//alert("shuqian");	
	doAjax("/ajax.php", "addmark=1&urlchapter="+urlchapter+"&aid=" + aid + "&cid=" + cid, "shuqian2", "GET", 0);
}
function shuqian2(t){
	var t = t.replace(/\s/g,'');
	//alert(t);
	var a = t.split("|");
	if(a[0]==1){
		$("#shuqian").html("<span class=red>已存书签</span>");
	}
	if(a[0]==0){
		window.location.href = "/login.php?url="+a[1];
	}
}
function addbookcase(urlinfo,aid){
	$.get('/ajax.php',{'addbookcase':'1','urlinfo':urlinfo,'aid':aid},
		function(data){
			data=data.replace(/\s/g,'');data=data.split("|");
			if(data[0]==1){
				$('.sj').animate({left:"-5px"},20).animate({left:"10px"},20).animate({left:"-10px"},20).animate({left:"0px"},20).html('成功加入书架');
			}
			else{
				window.location.href = "/login.php?url="+data[1];
			}
		});
}
function case_del(aid){
	$.post("/ajax.php",{"aid":aid,"case_del":"1"},function(data){
		$("#"+aid).html("<tr><td class='del1'>删除中，请稍后...</td></tr>");if(data != ""){
			$("#"+aid).html("<tr><td class='del1'>已从书架删除！</td></tr>");
		}
	});
}

//广告开始
function _yyun_top(){//顶部广告
	document.writeln("");
}

function _yyun_middle(){//中间广告
	document.writeln("");
}

function _yyun_bottom(){//底端广告
	document.writeln("");
}
function _yyun_tj(){//统计代码

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?ae39c9b2f5bca98ed17fa9dd7916f157";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


//ziyuan.baidu.com
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
//360
(function(){
var src = (document.location.protocol == "http:") ? "http://js.passport.qihucdn.com/11.0.1.js?3d1a8425fea89fb52422a4d45eb16fe5":"https://jspassport.ssl.qhimg.com/11.0.1.js?3d1a8425fea89fb52422a4d45eb16fe5";
document.write('<script src="' + src + '" id="sozz"><\/script>');
})();
}

