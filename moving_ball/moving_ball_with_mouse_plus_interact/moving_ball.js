$(document).ready(function () {
    $("#small_size").val(120);
    $("#big_size").val(200);
    $("#small_color").val("#ff0000");
    $("#big_color").val("#000000");
    $("#color").val("#ffffff");
    $(".small_ball").width(120);
    $(".small_ball").height(120);
    $(".big_ball").width(200);
    $(".big_ball").height(200);
    $(".small_ball").css("background", "#ff0000");
    $(".big_ball").css("background", "#000000");
    $(".effect").css("background", "#ffffff");
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
    $(".small_ball").css("background", $(this).val());
});
$("#big_color").on("change", function () {
    $(".big_ball").css("background", $(this).val());
});
$("#color").on("change", function () {
    $(".effect").css("background", $(this).val());
});