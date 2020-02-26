$(function(){
	//轮播图
		var i = 0;
		//图片切换
		$('#content-ul-li1').css('background','white');
		function change(){
			$('.content-ul-li').eq(i).css('background','white').siblings().css('background','');
			$('.background-img').eq(i).fadeIn(1000).siblings().fadeOut(1000);
		}
		//悬停事件
		$('.background-img').hover(
			function(){
				clearInterval(time)
			},function(){
				time = setInterval(add,3000);
			})
		//计时器
		var time = setInterval(add,3000);
		function add(){
			i++;
			if(i>1){
				i=0;
			}
			change(i);
			}
		$('.content-ul-li').click(function(){
			$(this).css('background','white').siblings().css('background','');
			i = $(this).index();
			$('.background-img').eq(i).fadeIn(1000).siblings().fadeOut(1000);
		});
	// 核心区导航栏
		//首页
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
	//详情按钮
		$('.animate-box-button a').click(function(){
			$('.animate-box-button').css('border','3px solid white');
		})
	//文字移动效果
		$('#middle-ul li').mouseover(function(){
			var index = $(this).index();
			var height = $('#middle-ul li').css('height');
    		$('#middle-ul li').css({'height':height});
			$('.name').eq(index).css({'transition':'all 0.3s','margin-top':'-10px','opacity':'0'});
			$('.china').eq(index).css({'transition':'all 0.3s','margin-top':'-10px','opacity':'1'});
		})	
		$('#middle-ul li').mouseout(function(){
			var index = $(this).index();
			$('.name').eq(index).css({'transition':'all 0.3s','margin-top':'10px','opacity':'1'});
			$('.china').eq(index).css({'transition':'all 0.3s','margin-top':'10px','display':'block','opacity':'0'});
		})
		$(window).resize(function () {          //当浏览器大小变化时
    		$('#middle-ul li').css('height','');
		});
		//固定定位
		winhei = $(window).height();
    	winwid = $(window).width();
		//右下角固定定位
    	$('#fixed-div2').css({'position':'fixed','top':winhei-30,'left':winwid-50}); 
    	$('#fixed-div1').css({'position':'fixed','top':winhei-180,'left':winwid-50});
    	$('#fixed-message').css({'position':'fixed','top':winhei-180,'left':winwid-120});
    	$('#fixed-QR-code').css({'position': 'fixed','top':winhei-145,'left':winwid-170});
		$(window).resize(function () {          //当浏览器大小变化时
    		//侧边栏高度
    		$('#sidebar').css('height',winhei);
    		winhei = $(window).height();
    		winwid = $(window).width();
    		$('#fixed-div2').css({'position':'fixed','top':winhei-30,'left':winwid-50}); 
    		$('#fixed-div1').css({'position':'fixed','top':winhei-180,'left':winwid-50});
    		$('#fixed-message').css({'position':'fixed','top':winhei-180,'left':winwid-120});
    		$('#fixed-QR-code').css({'position': 'fixed','top':winhei-145,'left':winwid-170}); 
		}); 
		$('#fixed-div1-i1').mouseover(function(){
			$('#fixed-message').css('display','block');
			$('#fixed-div1-i1').css('background','rgb(255,96,96)');
		})
		$('#fixed-div1-i1').mouseout(function(){
			$('#fixed-message').css('display','none');
			$('#fixed-div1-i1').css('background','rgb(76,76,76)');
		})
		$('#fixed-div1-i2').mouseover(function(){
			$('#fixed-QR-code').css('display','block');
			$('#fixed-div1-i2').css('background','rgb(255,96,96)');
		})
		$('#fixed-div1-i2').mouseout(function(){
			$('#fixed-QR-code').css('display','none');
			$('#fixed-div1-i2').css('background','rgb(76,76,76)');
		})
		//鼠标滚轮时间
		$(window).scroll(function() {
            var s = $(window).scrollTop();
            if(s>40){
                $('#fixed-div2').css('display','block');
            }else{
                $('#fixed-div2').css('display','none');
            }
        });

})