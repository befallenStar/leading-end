$("#searchButton").on("click",function (e) {
    e.preventDefault();
    var searchNumber = $("#searchNumber").val();
    var flag = 1;
    for (var i = 2; i < Math.sqrt(searchNumber); i++) {
        if (searchNumber % i == 0) {
            flag = 0;
            break;
        }
    }
    if (flag)
        $("#searchResult").text("是素数");
    else
        $("#searchResult").text("不是素数");
});