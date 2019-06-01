$(document).ready(function(){
    $(".small_ball").width($("#small_size").val());
    $(".small_ball").height($("#small_size").val());
    $(".big_ball").width($("#big_size").val());
    $(".big_ball").height($("#big_size").val());
    $(".small_ball").css("background",$("#small_color").val());
    $(".big_ball").css("background",$("#big_color").val());
$(".effect").css("background",$("#color").val())
});
$(".effect").mousemove(function (e) {
    var left = e.pageX + 70 < $(".effect").position().left + 660 ? e.pageX - 70 - $(".effect").position().left : 520;
    if (left < 0)
        left = 0;
    var top = e.pageY + 70 < 660 ? e.pageY - 70 : 520;
    $(".small_ball").css("left", left).css("top", top);
});
$("#small_size").on("change", function () {
    $(".small_ball").width($(this).val());
    $(".small_ball").height($(this).val());
});
$("#big_size").on("change", function () {
    $(".big_ball").width($(this).val());
    $(".big_ball").height($(this).val());
});
$("#small_color").on("change", function () {
    $(".small_ball").css("background",$(this).val());
});
$("#big_color").on("change", function () {
    $(".big_ball").css("background",$(this).val());
});
$("#color").on("change", function () {
    $(".effect").css("background",$(this).val());
});