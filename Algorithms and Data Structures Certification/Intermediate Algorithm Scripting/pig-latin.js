/* Mission:
 * Translate the provided string to pig latin.
 * Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 *
 * Given:
 * Input strings are guaranteed to be English words in all lowercase.
 *
 * Resources: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 */

var vowels = ["a", "e", "i", "o", "u"];

function translatePigLatin(str) {
	if(vowels.indexOf(str.charAt(0)) == -1) {
		var index = 0;
		while(vowels.indexOf(str.charAt(index)) == -1) {
			index++;
		}
		
		str = str.substring(index) + str.substring(0,index) + "ay";
	} else {
		str+="way";
	}
	
	return str;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
translatePigLatin("california");  //should return "aliforniacay"
translatePigLatin("paragraphs");  //should return "aragraphspay"
translatePigLatin("glove");       //should return "oveglay"
translatePigLatin("algorithm");   //should return "algorithmway"
translatePigLatin("eight");       //should return "eightway"
