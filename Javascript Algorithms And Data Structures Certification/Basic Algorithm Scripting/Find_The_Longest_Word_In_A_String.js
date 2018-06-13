/* Mission: 
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 * 
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
 */

function findLongestWord(str) {
  return str.split(" ").reduce(function(x,y){
    if(x.length > y.length)
      return x;
    else 
      return y;
  }).length;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
findLongestWord("The quick brown fox jumped over the lazy dog");                  //should return a number
findLongestWord("The quick brown fox jumped over the lazy dog");                  //should return 6
findLongestWord("May the force be with you");                                     //should return 5
findLongestWord("Google do a barrel roll");                                       //should return 6
findLongestWord("What is the average airspeed velocity of an unladen swallow");   //should return 8
findLongestWord("What if we try a super-long word such as otorhinolaryngology");  //should return 19
