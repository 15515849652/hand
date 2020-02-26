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
	})