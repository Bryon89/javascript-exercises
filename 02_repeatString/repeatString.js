const repeatString = function(thetext, repeats) {
    if (repeats > -1) {
        let output = '';
        i = 0;
        while (i < repeats) {
            output += thetext;
            i++;
        }
        return output;
    } else {
        output = "ERROR";
        return output;
    }
};

// Do not edit below this line
module.exports = repeatString;
