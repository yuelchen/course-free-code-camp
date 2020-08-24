/* Mission:
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
 * The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

function uniteUnique() {
	var unique = [];
	for(i=0;i<arguments.length;i++) {
		var array = arguments[i];
		for(j=0;j<array.length;j++) {
			if(unique.indexOf(array[j]) == -1) {
				unique.push(array[j]);
			}
		}
	}
	
	return unique;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);             //should return [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);               //should return [1, 3, 2, [5], [4]]
uniteUnique([1, 2, 3], [5, 2, 1]);                        //should return [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);  //should return [1, 2, 3, 5, 4, 6, 7, 8]
