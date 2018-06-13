/* Mission:
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 * 
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */

function pairElement(str) {
  var single = str.split("");
  var pair = [];
  for(i=0;i<single.length;i++){
    switch(single[i]){
      case "A":
        pair.push([single[i], "T"]);
        break;
      case "C":
        pair.push([single[i], "G"]);
        break;
      case "G":
        pair.push([single[i], "C"]);
        break;
      case "T":
        pair.push([single[i], "A"]);
        break;
    }
  }
  return pair;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
pairElement("ATCGA"); //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG"); //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA"); //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
