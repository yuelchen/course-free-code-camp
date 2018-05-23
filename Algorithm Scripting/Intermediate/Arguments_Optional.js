/* Mission:
 * Create a function that sums two arguments together. 
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
 * 
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 */
 
function addTogether(x) {
  if(typeof x === 'string' || typeof arguments[1] === 'string')
    return undefined;
  else if(arguments[1])
    return x + arguments[1];
  else
    return function(y){
      if(!(Array.isArray(y)))
        return x += y;
    };
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
addTogether(2, 3);                    //should return 5.
addTogether(2)(3);                    //should return 5.
addTogether("http://bit.ly/IqT6zt");  //should return undefined.
addTogether(2, "3");                  //should return undefined.
addTogether(2)([3]);                  //should return undefined.
