const sumAll = function(first, second) {
    if (first < 0 || second < 0) {
        sum = "ERROR";
    } else if (typeof first != 'number' || typeof second != 'number' ) {
        sum = "ERROR";
    } else {
        if (first > second) {
            i = second;
            sum = 0;
            while (i <= first) {
                sum += i;
                i++;
            }
        } else if (second > first) {
            i = first;
            sum = 0;
            while (i <= second) {
                sum += i;
                i++;
            }
        }
    } 
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
