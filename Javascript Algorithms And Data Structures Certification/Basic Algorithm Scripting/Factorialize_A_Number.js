/* Mission: 
 * Return the factorial of the provided integer.
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * 
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
 */

function factorialize(num) {
  var count = 1;
  for(i=1;i<=num;i++)
    count *= i;
  return count;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
factorialize(5);  //should return a number
factorialize(5);  //should return 120
factorialize(10); //should return 3628800
factorialize(20); //should return 2432902008176640000
factorialize(0);  //should return 1
