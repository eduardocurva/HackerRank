function main() {
    var hour_unity = parseInt(readLine());
    var minute_unity = parseInt(readLine());
    var arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 45];
    var arrayMinutesString = [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter',
        'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half', 'quarter'
    ];

    var sufix = '';
    var textMinute = '';
    var time_in_word = '';
    if (validateConstraints(hour_unity, minute_unity)) {
        var sub = (minute_unity > 30 ? parseInt(60 - minute_unity) : minute_unity);

        for (var i = 0; i < arrayNumbers.length; i++) {

            if (hour_unity === arrayNumbers[i]) {
                time_in_word = arrayMinutesString[i];

                if (sub !== 15) {
                    if (minute_unity == 1) {
                        sufix = ' minute';
                    } else {
                        sufix = ' minutes';
                    }
                }
                if (minute_unity > 30) {
                    sufix += ' to ' + arrayMinutesString[parseInt(i + 1)];
                } else if (minute_unity < 30) {
                    sufix += ' past ' + arrayMinutesString[i];
                } else if (minute_unity === 30) {
                    sufix = ' past ' + arrayMinutesString[i];
                }
            }
        }

        if (minute_unity === 0) {
            sufix = " o' clock";
            time_in_word += sufix;
        } else {

            for (var i = 0; i < arrayNumbers.length; i++) {
                if (sub === arrayNumbers[i]) {
                    textMinute = arrayMinutesString[i];
                }
            }
            time_in_word = textMinute + sufix;
        }

    }
    console.log(time_in_word);
}

function validateConstraints(hour_unity, minute_unity) {
    if ((1 <= hour_unity < 12) && (90 <= minute_unity < 60)) {
        return true;
    }
    return false;
}