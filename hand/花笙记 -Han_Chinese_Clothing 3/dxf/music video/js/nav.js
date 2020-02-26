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
		winhei = $(window).height();
    	winwid = $(window).width();
    	$(window).resize(function () {          //当浏览器大小变化时
    		$('.box-contents').css('height',winhei);
    		//侧边栏高度
    		$('#sidebar').css('height',winhei);
		});
		//面包屑显示
		$('#btn').click(function(){
			$('#right').css({'transition':'all 0.5s','margin-left':'300px'});
    		$('#background-ccc').css({'width':winwid,'height':winhei});
    		$('#sidebar').css({'transition':'all 0.5s','margin-left':'0px','height':winhei,'background':'rgb(246,246,246)'});
    		$('#background-ccc').css({'background':'rgba(255,255,255,0.7)','transition':'all 0.5s'});
    		$('#btn').css('display','none');
    		$('#close').css({'transition':'all 0.5s','color':'rgba(0,0,0,1)'});
		})
		//面包屑隐藏
		$('#background-ccc').click(function(){
			$('#right').css({'transition':'all 0.5s','margin-left':'0px'});
    		$('#sidebar').css({'transition':'all 0.5s','margin-left':'-300px'});
    		$('#background-ccc').css({'width':'','height':''});
    		$('#background-ccc').css('background','rgba(255,255,255,0.7)');
    		$('#btn').css('display','block');
    		$('#close').css({'transition':'all 0.5s','color':'rgba(0,0,0,0)'});
		})
		$('#sidebar-body div').mouseover(function(){
			var index = $(this).index();
			$('#sidebar-body div p').eq(index).css('color','red');
			$('#sidebar-body div i').eq(index).css('color','red');
		})
		$('#sidebar-body div').mouseout(function(){
			var index = $(this).index();
			$('#sidebar-body div p').eq(index).css('color','black');
			$('#sidebar-body div i').eq(index).css('color','black');
		})	
		$('#sidebar-footer-content div i').mouseover(function(){
			$(this).css('color','red');
		})	
		$('#sidebar-footer-content div i').mouseout(function(){
			$(this).css('color','black');
		})
		$('#phone-top-box-search').click(function(){
			$('#search1').fadeIn(1000);
		})
		$('#search-close1').click(function(){
			$('#search1').fadeOut(1000);
		})
})
