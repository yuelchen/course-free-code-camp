/* Mission:
 * Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */

function titleCase(str) {
  var words = str.split(" ");
  for(i=0;i<words.length;i++)
    words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
  return words.join(" ");
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
titleCase("I'm a little tea pot");                //should return a string
titleCase("I'm a little tea pot");                //should return "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt");                     //should return "Short And Stout"
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");  //should return "Here Is My Handle Here Is My Spout"
