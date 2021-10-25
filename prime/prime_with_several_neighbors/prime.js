$("#searchButton").on("click", function (e) {
    e.preventDefault();
    var searchNumber = $("#searchNumber").val();
    var flag = prime(searchNumber);
    if (searchNumber < 2) {
        $("#searchResult").text("2是最小的素数");
        return;
    }
    if (flag)
        $("#searchResult").text("是素数");
    else {
        $("#searchResult").text("不是素数");
        while (!flag) {
            searchNumber++;
            flag = prime(searchNumber);
        }
        $("#nextPrime").text("下一个素数是" + searchNumber);
    }
});

function prime(number) {
    var flag = 1;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            flag = 0;
            break;
        }
    }
    return flag
}

$("#lastPrime").on("click", function (e) {
    e.preventDefault();
    $("#searchResult").text("");
    $("#nextPrime").text("");
    var currentNumber = $("#searchNumber").val() - 1;
    var flag = prime(currentNumber);
    while (!flag) {
        currentNumber--;
        flag = prime(currentNumber);
    }
    if (currentNumber < 2) {
        $("#searchResult").text("2是最小的素数");
        return;
    }
    $("#searchNumber").val(currentNumber);
    $("#nextPrime").text(currentNumber);
})

$("#comingPrime").on("click", function (e) {
    e.preventDefault();
    $("#searchResult").text("");
    $("#nextPrime").text("");
    var currentNumber = +$("#searchNumber").val() + 1;
    var flag = prime(currentNumber);
    while (!flag) {
        currentNumber++;
        flag = prime(currentNumber);
    }
    if (currentNumber < 2) {
        $("#searchResult").text("2是最小的素数");
        return;
    }
    $("#searchNumber").val(currentNumber);
    $("#nextPrime").text(currentNumber);
})

$("#lastList").on("click", function (e) {
    e.preventDefault();
    $("#searchResult").text("");
    $("#nextPrime").text("");
    var currentNumber = $("#searchNumber").val() - 1;
    var length = $("#length").val();
    var flag = prime(currentNumber);
    var primes = [];
    for (var i = 0; i < length; i++) {
        while (!flag) {
            currentNumber--;
            flag = prime(currentNumber);
        }
        flag = false;

        if (currentNumber < 2) {
            $("#searchResult").text("2是最小的素数");
            break;
        }
        primes[i] = currentNumber;
    }
    var result = primes.join("、");
    console.log(result);
    $("#nextPrime").text(result);
})

$("#comingList").on("click", function (e) {
    e.preventDefault();
    $("#searchResult").text("");
    $("#nextPrime").text("");
    var currentNumber = +$("#searchNumber").val() + 1;
    var length = $("#length").val();
    var flag = prime(currentNumber);
    var primes = [];
    for (var i = 0; i < length; i++) {
        while (!flag) {
            currentNumber++;
            flag = prime(currentNumber);
        }
        flag = false;

        if (currentNumber < 2) {
            $("#searchResult").text("2是最小的素数");
            break;
        }
        primes[i] = currentNumber;
    }
    var result = primes.join("、");
    console.log(result);
    $("#nextPrime").text(result);
})