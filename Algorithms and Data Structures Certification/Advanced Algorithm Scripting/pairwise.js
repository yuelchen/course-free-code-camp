/* Mission: 
 * Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.
 * If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices. 
 * Once an element has been used, it cannot be reused to pair with another.
 * 
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

function pairwise(arr, arg) {
	if(arr.length == 0) {
		return 0;
		
	} else {
		var used = [];
		var sum = 0;
		for(i=0;i<arr.length;i++) {
			for(j=0;j<arr.length;j++) {
				if((arr[i] + arr[j]) == arg && used.indexOf(i) == -1 && used.indexOf(j) == -1 && i != j){
					used.push(i); used.push(j);
					sum += i + j;
				}
			}
		}
		
		return sum;
	}
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
pairwise([1, 4, 2, 3, 0, 5], 7);  //should return 11
pairwise([1, 3, 2, 4], 4);        //should return 1
pairwise([1, 1, 1], 2);           //should return 1
pairwise([0, 0, 0, 0, 1, 1], 1);  //should return 10
pairwise([], 100);                //should return 0
