/* Mission: 
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
 * The lowest number will not always come first.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

function sumAll(arr) {
  var sum = 0;
  for(i=Math.min.apply(null, arr);i<=Math.max.apply(null, arr);i++){
    sum += i;
  }
  return sum;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
sumAll([1, 4])  //should return a number
sumAll([1, 4])  //should return 10
sumAll([4, 1])  //should return 10
sumAll([5, 10]) //should return 45
sumAll([10, 5]) //should return 45
