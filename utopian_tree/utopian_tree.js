function main() {
    var t = parseInt(readLine());
    var finalHeight = 1;
    for (var a0 = 0; a0 < t; a0++) {
        var n = parseInt(readLine());

        console.log(calcHeight(n));

    }
}

function calcHeight(n) {
    var initialHeight = 1;
    var finalHeight = 0;
    if (n === 0)
        return initialHeight;

    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) {
            finalHeight = doSpring(initialHeight);
        } else {
            finalHeight = doSummer(initialHeight);
        }

        initialHeight = finalHeight;
    }
    return finalHeight;

}
// spring, it doubles in height. 
function doSpring(h) {
    return h * 2;
}

//Each summer, its height increases by 1 meter.
function doSummer(h) {
    return h + 1;
}