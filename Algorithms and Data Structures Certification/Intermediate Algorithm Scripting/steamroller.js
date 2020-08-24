/* Mission:
 * Flatten a nested array. You must account for varying levels of nesting.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */

function flattenArray(flat, arr) {
	arr.forEach(function(index) {
		if(Array.isArray(index) == false) {
			flat.push(index);
		} else {
			flat = flattenArray(flat,index);
		}
	});
	
	return flat;
}

function steamrollArray(arr) {
	var flattened = [];
	return flattenArray(flattened, arr);
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
steamrollArray([[["a"]], [["b"]]]);   //should return ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]);  //should return [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]);  //should return [1, {}, 3, 4]
