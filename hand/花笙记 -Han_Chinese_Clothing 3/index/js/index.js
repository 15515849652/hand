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
			if(i>4){
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
	//图片两端对齐
		//页面加载完成
		    winhei = $(window).height();
    		winwid = $(window).width();
    		height = $('#content-footer-box-img').css('height');
    		$('#content-footer-box-div').css('height',height);
    		//右下角固定定位
    		$('#fixed-div2').css({'position':'fixed','top':winhei-30,'left':winwid-50}); 
    		$('#fixed-div1').css({'position':'fixed','top':winhei-180,'left':winwid-50});
    		$('#fixed-message').css({'position':'fixed','top':winhei-180,'left':winwid-120});
			$('#fixed-QR-code').css({'position': 'fixed','top':winhei-145,'left':winwid-170});
			//获取6个图片的宽和高
			width1 = $('#content-footer-box-img div').css('width');
			height1 = $('#content-footer-box-img div').css('height');
			width2 = $('#content-footer-box-div-img1').css('width');
			height2 = $('#content-footer-box-div-img1').css('height');
			width3 = $('#content-footer-box-div-img2').css('width');
			height3 = $('#content-footer-box-div-img2').css('height');
		$(window).resize(function () {          //当浏览器大小变化时
			height = $('#content-footer-box-img').css('height');
			$('#content-footer-box-div').css('height',height);
			//获取6个图片的宽和高
			width1 = $('#content-footer-box-img div').css('width');
			height1 = $('#content-footer-box-img div').css('height');
			width2 = $('#content-footer-box-div-img1').css('width');
			height2 = $('#content-footer-box-div-img1').css('height');
			width3 = $('#content-footer-box-div-img2').css('width');
			height3 = $('#content-footer-box-div-img2').css('height');
    		$('.box-contents').css('height',winhei);
    		//侧边栏高度
    		$('#sidebar').css('height',winhei);

    		$('#content-footer-box-div').css({'height':height,'flex-direction':'column','justify-content':'space-between'});
    		winhei = $(window).height();
    		winwid = $(window).width();
    		$('#fixed-div2').css({'position':'fixed','top':winhei-30,'left':winwid-50}); 
    		$('#fixed-div1').css({'position':'fixed','top':winhei-180,'left':winwid-50});
    		$('#fixed-message').css({'position':'fixed','top':winhei-180,'left':winwid-120});
    		$('#fixed-QR-code').css({'position': 'fixed','top':winhei-145,'left':winwid-170}); 
		});
		//固定定位
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
		//鼠标滚轮时间
		$(window).scroll(function() {
            var s = $(window).scrollTop();
            if(s>40){
                $('#fixed-div2').css('display','block');
            }else{
                $('#fixed-div2').css('display','none');
            }
        });
		$('#content-footer-box-img').hover(function(){
			$('#cover1').css({'width':width1,'height':height1,'background':'rgba(0,0,0,0.2)'});
			$('#content-footer-box-img h3,#content-footer-box-img p').css('color','white');
		},function(){
			$('#cover1').css({'width':'','height':'','background':'rgba(0,0,0,0.2)'});
			$('#content-footer-box-img h3,#content-footer-box-img p').css('color','black');
		})
		$('#content-footer-box-div-img1').hover(function(){
			$('#cover2').css({'width':width2,'height':height2,'background':'rgba(0,0,0,0.2)'});
			$('#content-footer-box-div-img1 h3,#content-footer-box-div-img1 p').css('color','white');
		},function(){
			$('#cover2').css({'width':'','height':'','background':'rgba(0,0,0,0.2)'});
			$('#content-footer-box-div-img1 h3,#content-footer-box-div-img1 p').css('color','black');
		})
		$('#content-footer-box-div-img2').hover(function(){
			$('#cover3').css({'width':width3,'height':height3,'background':'rgba(0,0,0,0.2)'});
			$('#content-footer-box-div-img2 h3,#content-footer-box-div-img2 p').css('color','white');
		},function(){
			$('#cover3').css({'width':'','height':'','background':'rgba(0,0,0,0.2)'});
			$('#content-footer-box-div-img2 h3,#content-footer-box-div-img2 p').css('color','black');
		})
	})