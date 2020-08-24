/* Mission:
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */

function spinalCase(str){
	//append '-' to beginning of all capital letters;
	var replaced = str.replace(/([A-Z])/g, "-$1");
 
	//replace all underscores and spaces with '-'
	replaced = replaced.replace(/_|\s/g, "-");
  
	//replace all multi-occurence with a single '-'
	replaced = replaced.replace(/(--+)/g, "-");

	//replace first character if '-'
	replaced = replaced.replace(/(^-)/, "");
  
	return replaced.toLowerCase();
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
spinalCase("This Is Spinal Tap");       //should return "this-is-spinal-tap"
spinalCase("thisIsSpinalTap");          //should return "this-is-spinal-tap"
spinalCase("The_Andy_Griffith_Show");   //should return "the-andy-griffith-show"
spinalCase("Teletubbies say Eh-oh");    //should return "teletubbies-say-eh-oh"
spinalCase("AllThe-small Things");      //should return "all-the-small-things"
