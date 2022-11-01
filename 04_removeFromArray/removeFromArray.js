const removeFromArray = function(theArray) {
    const originalArray = theArray;
    const argsToRemove = Array.from(arguments);
    i = 0;
    j = 1;
    if (originalArray.length > 0) {
        while (j < argsToRemove.length) {
            while (i < originalArray.length) {
                if (originalArray[i] === argsToRemove[j]) {
                    originalArray.splice(i, 1);
                    i++;
                } else {
                    i++;
                }
            }
            j++;
            i = 0;
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
