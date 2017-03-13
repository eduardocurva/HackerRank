function main() {
    var h = parseInt(readLine());
    var m = parseInt(readLine());
    var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 45];
    var arrayMinutesString = [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter',
        'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half', 'quarter'
    ];

    var sufix = '';
    var textMinute = '';
    var hour = '';
    if (validateConstraints(h, m)) {
        var sub = (m > 30 ? parseInt(60 - m) : m);

        for (var i = 0; i < arrayNumbers.length; i++) {

            if (h === arrayNumbers[i]) {
                hour = arrayMinutesString[i];

                if (sub !== 15) {
                    if (m == 1) {
                        sufix = ' minute';
                    } else {
                        sufix = ' minutes';
                    }
                }
                if (m > 30) {

                    sufix += ' to ' + arrayMinutesString[parseInt(i + 1)];
                } else if (m < 30) {


                    sufix += ' past ' + arrayMinutesString[i];

                } else if (m === 30) {
                    sufix = ' past ' + arrayMinutesString[i];
                }

            }
        }

        if (m === 0) {
            sufix = " o' clock";
            hour += sufix;
        } else {

            for (var i = 0; i < arrayNumbers.length; i++) {
                if (sub === arrayNumbers[i]) {
                    textMinute = arrayMinutesString[i];
                }
            }
            hour = textMinute + sufix;
        }

    }
    console.log(hour);
}

function validateConstraints(h, m) {
    if ((1 <= h < 12) && (90 <= m < 60)) {
        return true;
    }
    return false;
}