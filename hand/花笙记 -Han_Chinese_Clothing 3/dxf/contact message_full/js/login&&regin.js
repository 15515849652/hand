$(function(){
  // console.log(sessionStorage.getItem("name"));
  // console.log(sessionStorage.getItem("password"));
  
    //初始化登录错误信息
  $('.login-box-error').text('');
  if(window.location.search !=""){
    var names = window.location.search;
    console.log(names);
    var index = names.lastIndexOf("name=");
    names = names.substring(index + 5, names.length);
    $('.online-login').html("<a>欢迎您，"+names+"</a>");
  }
  //判断账号是否被使用
  $("#regin_username").off().bind("input propertychange", function(){ 
    $('.regin-box-error').text('');
			$.ajax({
				type:"post",
				url:"contact message_php/register_search.php",
				data:{"name":$("#regin_username").val()},
				success:function(res){
					console.log(res);
					var arr = $.parseJSON(res);
					console.log(arr);
					if (arr.length>0) {
						$('.regin-box-error').text('昵称已被注册');
					}else{
						$('.regin-box-error').text('昵称可以使用');
					}
				}
			})
  })
  //
  $('#to_mv').click(function(){
    if(window.location.search !=""){
      var ids = window.location.search;
      var names = window.location.search;
      var index = names.lastIndexOf("name=");
      names = names.substring(index + 5, names.length);
      var exid = ids.substr(4, 1);
      var url = "../music video/mv_page1.html?id="+escape(exid)+"&name="+escape(names);
              window.location.href = url;
    }else{
      window.location.href = "../music video/mv_page1.html";
    }
  })
    //点击关闭登录窗口
  $('.online-login').click(function(){
    $('.regin-box-hide').hide();
    if(window.location.search ==""){
      $('#login-box-hide').css('display','block');
      $('#content').hide();
      $('body').attr("overflow","hidden hidden");
  }else{
    $('.online-login').attr("disabled","disabled");
    $('#content').show();
    $('body').removeAttr("overflow");
    alert("别点我,OK?");
  }
  })
  $('#login-box-hide').on('click',function(e){
      $('#login-box-hide').hide();
      $('#content').show();
    });
  $('#login-box-login').on('click',function(e){
      e.stopPropagation();
    });
    $('.close').on('click',function(){
      $('#login-box-hide').hide();
      $('#content').show();
    })
    //点击打开注册窗口
    $('.login-box-help').on('click',function(){
      $('#login-box-hide').hide();
      $('#regin-box-hide').show();
    })
    $('.regin-relogin').on('click',function(){
      $('#login-box-hide').show();
      $('#regin-box-hide').hide();
    })
    // 点击关闭注册窗口
    $('#regin-box-hide').on('click',function(e){
      $('#regin-box-hide').hide();
      $('#content').show();
    });
  $('#regin-box-regin').on('click',function(e){
      e.stopPropagation();
    });
    $('.close').on('click',function(){
      $('#login-box-hide').hide();
    })
    //判断cookie是否存储
    if($.cookie("name") != "" && $.cookie("password") != ""){
      $('#username').val($.cookie("name"));
      $('#password').val($.cookie("password"));
      $('#rememberme').prop('checked', true);
      // console.log($.cookie("password"));
    }else{
      $('#username').val("");
      $('#password').val("");
      $('#rememberme').prop('checked', false);
    }
    $('#online-shop').on('click',function(){
      if(sessionStorage.getItem("name") == null && sessionStorage.getItem("password") == null || sessionStorage.getItem("name") == "" && sessionStorage.getItem("password") == ""){
        $('#login-box-hide').css('display','block');
        $('#content').hide();
        $('body').attr("overflow","hidden hidden");
      }else{
        $('#login-box-hide').css('display','none');
        $('#content').show();
        $('body').removeAttr("overflow");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("password");
        window.location.href = 'online_message.html';
      }
      })
    if(sessionStorage.getItem("name") != null && sessionStorage.getItem("password") != null || sessionStorage.getItem("name") == "fail" && sessionStorage.getItem("password") == "fail"){
      $('#online-shop a').append("退出");
    }else{
      $('#online-shop a').append("");
      $('#username').val(sessionStorage.getItem("name"));
      $('#password').val(sessionStorage.getItem("password"));
    }
    //区域性选中checked值
    $('#rememberme').prop('checked') == false;
    $('.login-check-box').on('click',function(){
      if($('#rememberme').prop('checked') == false){
        $('#rememberme').prop('checked', true);
      }else{
        $('#rememberme').prop('checked', false);
      }
    })
    //注册模块
    $('#regin-box-submit').click(function(){
      var regin_name = $('#regin_username').val();
      var regin_pwd = $('#regin_password').val();
      if(regin_name.length<5 || regin_pwd.length<5){
        $('.regin-box-error').text('用户名或密码不符合要求');
      }else{
        $('.regin-box-error').text('');
        $.ajax({
				type:"post",
				url:"contact message_php/register.php",
				data:$('#regin_uform').serialize(),
				success:function(res){
					// console.log(res);
					if (res) {
            alert("注册成功");
            $('#login-box-hide').show();
            $('#regin-box-hide').hide();
					}else{
						alert("注册失败");
					}
				}
			})
      }    
    })
    //登录模块
    $('#login-box-submit').click(function(){
      $.ajax({
				type:"post",
				url:"contact message_php/login.php",
				data:$('#uform').serialize(),
				success:function(res){
            // console.log(res);
					var arr = $.parseJSON(res);
					if (arr.length>0) {
            $('.login-box-error').text('');
            if($("input[type='checkbox']").is(':checked')){
              $.cookie("name", $('#username').val(), { expires: 7, path: '/public' });
              $.cookie("password", $('#password').val(), { expires: 7, path: '/public' });  
              $.cookie("id", arr[0]['Id'], { expires: 7, path: '/public' });  
              sessionStorage.setItem("name","fail");
              sessionStorage.setItem("password","fail");
              sessionStorage.setItem("id",arr[0]['Id']);
              // $('.online-login').hide();
              // alert($.cookie("name"));
              var url = "online_message.html?id="+escape(arr[0]['Id'])+"&name="+escape(arr[0]['user_name']);
              window.location.href = url ;
            }else{
              $.cookie("name", "null");
              $.cookie("password", "null");
              $.cookie("id", "null");
              sessionStorage.setItem("name", $('#username').val());
              sessionStorage.setItem("password", $('#password').val());
              sessionStorage.setItem("id",arr[0]['Id']);
              var url = "online_message.html?id="+escape(arr[0]['Id'])+"&name="+escape(arr[0]['user_name']);
              window.location.href = url ;
            }
					}else{
            $('.login-box-error').text('账号或密码输入错误');
					}
				}
			})
    })
})               