$("body").mousemove(function (e) { 
    var left=e.pageX+70<$(window).width()?e.pageX-70:$(window).width()-140;
    var top=e.pageY+70<$(window).height()?e.pageY-70:$(window).height()-140;
    $(".small_ball").css("left", left).css("top",top);
});