function main() {
    var t = parseInt(readLine());
    var realK = '';
    for (var a0 = 0; a0 < t; a0++) {
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]); //number of students
        var k = parseInt(n_temp[1]); //limit factor
        a = readLine().split(' ');
        a = a.map(Number); //time of each student as an array

        realK = getRealK(a);
        
        if (realK < k) {
            console.log('YES');
        } else {
            console.log('NO');
        }
    }
}

function getRealK(timeArray) {
    var realK = 0;
    for (var i = 0; i < timeArray.length; i++) {
        if (timeArray[i] <= 0) {
            realK++;
        }
    }

    return realK;
}