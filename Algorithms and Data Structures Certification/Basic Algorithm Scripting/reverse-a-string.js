/* Mission:
 * Reverse the provided string.
 * Your result must be a string.
 * 
 * Resources: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

function reverseString(str) {
	return str.split("").reverse().join("");
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
reverseString("hello");                 //should return a string
reverseString("hello");                 //should become "olleh"
reverseString("Howdy");                 //should become "ydwoH"
reverseString("Greetings from Earth");  //should return "htraE morf sgniteerG"
