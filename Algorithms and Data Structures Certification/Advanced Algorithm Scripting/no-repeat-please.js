/* Mission:
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters.
 * Assume that all characters in the provided string are each unique.
 *
 * Resources:
 * https://www.mathsisfun.com/combinatorics/combinations-permutations.html
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */
 
var repeatOnly = /^([a-z])\1+$/;
var repeatStr = /([a-z])\1+/;

function permNumbers(string) {
	var results = [];
	if(string.length == 1) {
		results.push(string);
	} else {
		for(var i=0;i<string.length;i++) {
			var remaining = permNumbers(string.substring(0,i) + string.substring(i+1));
			for(var j=0;j<remaining.length;j++) {
				if(!(repeatStr.test(string[i] + remaining[j]))) {
					results.push(string[i] + remaining[j]);
				}
			}
		}
	}
	
	return results;
}

function permAlone(string) {
	if(string.length == 1) {
		return 1;
	} else if(repeatOnly.test(string)) {
		return 0;
	} else {
		return permNumbers(string).length;
	}
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
permAlone("aab");       //should return a number
permAlone("aab");       //should return 2
permAlone("aaa");       //should return 0
permAlone("aabb");      //should return 8
permAlone("abcdefa");   //should return 3600
permAlone("abfdefa");   //should return 2640
permAlone("zzzzzzzz");  //should return 0
permAlone("a");         //should return 1
permAlone("aaab");      //should return 0
permAlone("aaabb");     //should return 12
