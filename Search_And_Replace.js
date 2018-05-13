/* Mission:
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * Preserve the case of the original word when you are replacing it. 
 *
 * Given:
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */
 
function myReplace(str, before, after){
  if(before.charAt(0) == before.charAt(0).toUpperCase())
    after = after.charAt(0).toUpperCase() + after.substring(1);
  else
    after = after.charAt(0).toLowerCase() + after.substring(1);
  return str.replace(before, after);
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
myReplace("Let us go to the store", "store", "mall");                 //should return "Let us go to the mall"
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");      //should return "He is Sitting on the couch"
myReplace("This has a spellngi error", "spellngi", "spelling");       //should return "This has a spelling error"
myReplace("His name is Tom", "Tom", "john");                          //should return "His name is John"
myReplace("Let us get back to more Coding", "Coding", "algorithms");  //should return "Let us get back to more Algorithms"
