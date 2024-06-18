// 633. Sum Of Square Numbers



// Given a non-negative integer "c", decide whether there're two integers "a" and "b" such that "a2 + b2 = c".









/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    // Iterate through all possible values of `a` from 0 to sqrt(c)
    for (let a = 0; a * a <= c; a++) {
        // Calculate b^2
        let b2 = c - a * a;
        // Check if b2 is a perfect square
        let b = Math.sqrt(b2);
        // If b is an integer, then a^2 + b^2 = c
        if (b === Math.floor(b)) {
            return true;
        }
    }
    return false;
};
