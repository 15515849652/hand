$(function(){
    $('.movie').hover(function(){
        var i = $(this).index();
        $('.movie-top').eq(i).css("display","block");
        $('.touch-1').eq(i).css("display","none");
        $('.touch-2').eq(i).css("display","block");
        $('.movie-img img').eq(i).css("display","none");
        $('.msg-video').eq(i).css("display","block");
        $('.msg-video').eq(i).trigger('play');
    },function(){
        var i = $(this).index();
        $('.movie-top').eq(i).css("display","none");
        $('.touch-1').eq(i).css("display","block");
        $('.touch-2').eq(i).css("display","none");
        $('.movie-img img').eq(i).css("display","block");
        $('.msg-video').eq(i).css("display","none");
        $('.msg-video').eq(i).trigger('pause');
    });
})