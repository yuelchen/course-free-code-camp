/* Mission:
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 * 
 * Resources: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
 */

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function fearNotLetter(str){
  var missing;
  var first = str.charAt(0);
  var last = str.charAt(str.length-1);
  if(alphabet.indexOf(last)+1 - alphabet.indexOf(first) != str.length){
    missing = "";
    for(i=alphabet.indexOf(first);i<alphabet.indexOf(last);i++)
      if(!str.includes(alphabet[i]))
        missing += alphabet[i];
  } 
  return missing;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
fearNotLetter("abce");            //should return "d".
fearNotLetter("abcdefghjklmno");  //should return "i".
fearNotLetter("bcd");             //should return undefined.
fearNotLetter("yz");              //should return undefined.
