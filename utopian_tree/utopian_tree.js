function main() {
    var total_test_case = parseInt(readLine());
    var finalHeight = 1;
    for (var i = 0; i < total_test_case; i++) {
        var total_cycle = parseInt(readLine());

        console.log(getHeight(total_cycle));

    }
}

function getHeight(total_cycle) {
    var initialHeight = 1;
    var finalHeight = 0;
    if (total_cycle === 0)
        return initialHeight;

    for (var i = 0; i < total_cycle; i++) {
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
function doSpring(height) {
    return height * 2;
}

//Each summer, its height increases by 1 meter.
function doSummer(height) {
    return h + 1;
}