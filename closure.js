function x() {
    for (var i = 1; i <= 5; i++) {
        function closure(y) {
            setTimeout(function () {
                console.log(y)
            }, y * 1000)
        }
        closure(i)
    }
}
x()