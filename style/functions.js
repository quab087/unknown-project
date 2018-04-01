var $window=$(window),gardenCtx,gardenCanvas,$garden,garden;var clientWidth=$(window).width();var clientHeight=$(window).height();

var point_array = [];
var count = 0,x = 0,y = 0;
var a,b;
var float_point = [];
$(function(){
	$loveHeart=$("#loveHeart");
	
	var a=$loveHeart.width()/2;
	
	var b=$loveHeart.height()/2-55;$garden=$("#garden");
	
	gardenCanvas=$garden[0];
	
	gardenCanvas.width=$("#loveHeart").width();
	
	gardenCanvas.height=$("#loveHeart").height();
	
	gardenCtx=gardenCanvas.getContext("2d");
	
	gardenCtx.globalCompositeOperation="lighter";
	
	garden=new Garden(gardenCtx,gardenCanvas);
	if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	$("#content").css("width",$loveHeart.width()+$("#code").width());
	
	$("#content").css("height",Math.max($loveHeart.height(),$("#code").height()));
	
	$("#content").css("margin-top",Math.max(($window.height()-$("#content").height())/3.5,0));
	
	$("#content").css("margin-left",Math.max(($window.width()-$("#content").width()),10));
	}
	setInterval(function(){garden.render()},Garden.options.growSpeed)
	
	canvas = document.getElementById("garden");
	context = canvas.getContext("2d");
	context.fillStyle = black;
});

var treeHeight = 0;

$(window).resize(function(){
	var b=$(window).width();
	var a=$(window).height();
	if(b!=clientWidth&&a!=clientHeight){
		location.replace(location)
	}
});
	
	function array_2d(x,y){
		this.x = x;
		this.y = y;
	}
	
	function get_Rand_Point(){
		
		var x=randomFromTo(0,canvas.width);
		var y=randomFromTo(0,canvas.height);	
		var array = new array_2d(x,y);
		point_array.push(array);
		return new Array(point_array[count].x,point_array[count++].y);
		}
	
		
	
function startHeartAnimation(){
	var c = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)? 50 : 1000;
	
	var d=10;
	
	var b=new Array();
	var b2=new Array();
	var a=setInterval(function(){
		
		var h=get_Rand_Point(d);
		
		var e=true;
		
		for(var f=0;f<b.length;f++){
			
			var g=b[f];
			
			var j=Math.sqrt(Math.pow(g[0]-h[0],2)+Math.pow(g[1]-h[1],2));
			
			if(j<Garden.options.bloomRadius.max*1.3){
				
				e=false;
				break
				
			}
		}
		if(e){
			
			b.push(h);
			//b2.push(h2);
			garden.createRandomBloom(h[0],h[1]);
			//garden.createRandomBloom(h2[0],h2[1]);
		}
		if(d>=20)
			showMessages();
		if(d>=120){
			clearInterval(a);
		}
		else		
			d+=1
		
		if(c >= 100)
			c = c - 100;
	},c)	
}

(function(a){
	a.fn.typewriter=function(){
		
		this.each(function(){
			var d=a(this),c=d.html(),b=0;d.html("");
			var e=setInterval(function(){
				var f=c.substr(b,1);
				
				if(f=="<"){
					b=c.indexOf(">",b)+1}
				else{
					b++
				}
				d.html(c.substring(0,b)+(b&1?"_":""));
				if(b>=c.length){
					clearInterval(e)
				}
			},/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?85:100);
		});
		
		return this;
	}
})(jQuery);
function showMessages(){
	$("#messages").fadeIn(3000,
	function(){showHBD();})
}
	function adjustWordsPosition(){
		$("#words").css("position","absolute");
		$("#words").css("top",$("#garden").position().top+195);
		$("#words").css("left",$("#garden").position().left+70)
	}function adjustCodePosition(){
		$("#code").css("margin-top",($("#garden").height()-$("#code").height())/3.5)
	}function showHBD(){
		$("#HBD").fadeIn(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?3000 : 15000);
	}
	
function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}
	
	
	