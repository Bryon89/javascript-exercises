const reverseString = function(theStringToReverse) {
    var splitString = theStringToReverse.split("")
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
