/* Mission:
 * Repeat a given string (first argument) num times (second argument). 
 * Return an empty string if num is not a positive number.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

function repeatStringNumTimes(str, num) {
	return num >= 0 ? str.repeat(num) : "";
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
repeatStringNumTimes("*", 3);     //should return "***"
repeatStringNumTimes("abc", 3);   //should return "abcabcabc"
repeatStringNumTimes("abc", 4);   //should return "abcabcabcabc"
repeatStringNumTimes("abc", 1);   //should return "abc"
repeatStringNumTimes("*", 8);     //should return "********"
repeatStringNumTimes("abc", -2);  //should return ""
