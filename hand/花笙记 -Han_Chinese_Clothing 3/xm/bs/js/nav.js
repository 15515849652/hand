$(function(){
	$('#nav-li1').mouseover(function(){
			$('#nav1').css('display','block');
			$('#nav-li-border1').css('border-bottom','2px solid white');
			$('.nav1-ul-li a').mouseover(function(){
				$(this).css('color','red');
			})
		})
		$('#nav-li1').mouseout(function(){
			$('#nav1').css('display','none');
			$('#nav-li-border1').css('border-bottom','');
			$('.nav1-ul-li a').mouseout(function(){
				$(this).css('color','');
			})
		})
		//作品
		$('#nav-li2').mouseover(function(){
			$('#nav2').css('display','block');
			$('#nav-li-border2').css('border-bottom','2px solid white');
			$('#nav2 li a').mouseover(function(){
				$(this).css('color','red');
			})
		})
		$('#nav-li2').mouseout(function(){
			$('#nav2').css('display','none');
			$('#nav-li-border2').css('border-bottom','');
			$('#nav2 li a').mouseout(function(){
				$(this).css('color','');
			})
		})
		//服务
		$('#nav-li3').mouseover(function(){
			$('#nav3').css('display','block');
			$('#nav-li-border3').css('border-bottom','2px solid white');
			$('.nav3-ul-li a').mouseover(function(){
				$(this).css('color','red');
			})
		})
		$('#nav-li3').mouseout(function(){
			$('#nav3').css('display','none');
			$('#nav-li-border3').css('border-bottom','');
			$('.nav3-ul-li a').mouseout(function(){
				$(this).css('color','');
			})
		})
		//资讯
		$('#nav-li4').mouseover(function(){
			$('#nav4').css('display','block');
			$('#nav-li-border4').css('border-bottom','2px solid white');
			$('.nav4-ul-li a').mouseover(function(){
				$(this).css('color','red');
			})
		})
		$('#nav-li4').mouseout(function(){
			$('#nav4').css('display','none');
			$('#nav-li-border4').css('border-bottom','');
			$('.nav4-ul-li a').mouseout(function(){
				$(this).css('color','');
			})
		})
		//联系
		$('#nav-li5').mouseover(function(){
			$('#nav5').css('display','block');
			$('#nav-li-border5').css('border-bottom','2px solid white');
			$('.nav5-ul-li a').mouseover(function(){
				$(this).css('color','red');
			})
		})
		$('#nav-li5').mouseout(function(){
			$('#nav5').css('display','none');
			$('#nav-li-border5').css('border-bottom','');
			$('.nav5-ul-li a').mouseout(function(){
				$(this).css('color','');
			})
		})
		//搜索框
		$('#nav-i').click(function(){
			$('#search').fadeIn(1000);
		})
		$('#search-close').click(function(){
			$('#search').fadeOut(1000);
		})
})
