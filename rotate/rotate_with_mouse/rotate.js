$(document).mousemove(function (e) {
    var divPoint = {
        Y: 300,
        X: 675
    };
    var mousePoint = {
        Y: e.pageY,
        X: e.pageX
    };
    var gapY = mousePoint.X - divPoint.X;
    var gapX = divPoint.Y - mousePoint.Y;
    var maxY = $(window).width() - divPoint.X;
    var maxX = divPoint.Y - $(window).height();
    var angle = Math.sqrt(Math.pow(gapX, 2) + Math.pow(gapY, 2)) / Math.sqrt(Math.pow(maxX, 2) + Math.pow(maxY, 2));
    angle *= 60;
    var rotate = "rotate3d(" + gapX + "," + gapY + ",0," + angle + "deg)";
    $("div").css("transform", rotate);
});