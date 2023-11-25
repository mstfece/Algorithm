/**
 * @param {number} n
 * @return {Function} counter
 */

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

var createCounter = function (n) {
    return () => n++;
};