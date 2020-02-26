$(function(){
    $('.movie').hover(function(){
        var i = $(this).index();
        $('.movie-top').eq(i).css("display","block");
        $('.touch-1').eq(i).css("display","none");
        $('.touch-2').eq(i).css("display","block");
    },function(){
        var i = $(this).index();
        $('.movie-top').eq(i).css("display","none");
        $('.touch-1').eq(i).css("display","block");
        $('.touch-2').eq(i).css("display","none");
    });
})