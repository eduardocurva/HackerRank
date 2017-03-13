function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    width = readLine().split(' ');
    width = width.map(Number);
    for (var a0 = 0; a0 < t; a0++) {
        var i_temp = readLine().split(' ');
        var i = parseInt(i_temp[0]); //enter
        var j = parseInt(i_temp[1]); //exit
        console.log(returnMinValue(width, i, j));
    }

}

function returnMinValue(widthArray, i, j) {
    var minValue = widthArray[i];
    for (var x = i; x <= j; x++) {
        if (widthArray[x] < minValue) {
            minValue = widthArray[x];
        }
    }
    return minValue;
}