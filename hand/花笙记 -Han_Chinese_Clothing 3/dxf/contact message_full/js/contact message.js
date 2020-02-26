$(function(){
    $('#msg_upload').on('click',function(){
        var name = $('.msg-name input').val(),
        email = $('.msg-email input').val(),
        phone = $('.msg-phone input').val(),
        text = $('.msg-text textarea').val();
        if(name.length ==0 || email.length == 0 || phone.length == 0 || text.length == 0){
            alert("必填内容不能为空！");
        }else{
            console.log($('.msg-name input').val());
            $.ajax({
                type:"post",
                url:"contact message_php/contact message.php",
                data:{"name":$('.msg-name input').val(),
                      "email":$('.msg-email input').val(),
                      "phone":$('.msg-phone input').val(),
                      "text":$('.msg-text textarea').val()},
                success:function(res){
                    // console.log(res);
                    if (res) {
                        alert("提交成功");
                        window.location.href="#";
                     }else{
                        alert("提交失败");
                     }
                }
            })
        }
    })
})