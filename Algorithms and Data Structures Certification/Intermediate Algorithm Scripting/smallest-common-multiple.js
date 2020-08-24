/* Mission:
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 *
 * Resources:
 * https://www.mathsisfun.com/least-common-multiple.html
 */

function greatestCommons(x, y) {
	return ! y ? x : greatestCommons(y, x % y);
}

function smallestCommons(arr) {
	var scm = 1;
	for(i=Math.min.apply(null, arr);i<=Math.max.apply(null, arr);i++) {
		scm = (scm * i) / greatestCommons(scm, i);
	}
	
	return scm;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
smallestCommons([1, 5]);    //should return a number
smallestCommons([1, 5]);    //should return 60
smallestCommons([5, 1]);    //should return 60
smallestCommons([1, 13]);   //should return 360360
smallestCommons([23, 18]);  //should return 6056820
