$(document).mousemove(function (e) {
    var divPoint = {
        Y: $("div").position().top + 200,
        X: $("div").position().left + 200
    };
    var mousePoint = {
        Y: e.pageY,
        X: e.pageX
    };
    var gapX = mousePoint.X - divPoint.X;
    var gapY = mousePoint.Y - divPoint.Y;
    if (gapX > 0) {
        if (gapY > 0) {
            gapX *= -1;
        } else {
            gapY *= -1;
        }
    } else {
        gapY *= -1;
    }
    var maxX = $(window).width() - divPoint.X;
    var maxY = $(window).height() - divPoint.Y;
    var angle = Math.sqrt(Math.pow(gapX, 2) + Math.pow(gapY, 2)) / Math.sqrt(Math.pow(maxX, 2) + Math.pow(maxY, 2));
    angle *= 80;
    var rotate = "rotate3d(" + gapX + "," + gapY + ",0," + angle + "deg)";
    $("div").css("transform", rotate);
});