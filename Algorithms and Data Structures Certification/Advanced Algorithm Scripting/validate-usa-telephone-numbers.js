/* Mission:
 * Return true if the passed string is a valid US phone number.
 * The area code is required. If the country code is provided, you must confirm that the country code is 1. 
 * Return true if the string is a valid US phone number; otherwise return false.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */
 
function telephoneCheck(str) {
	var parentheses = /^[1]?\([0-9]{3}\)[-]?[0-9]{3}[-]?[0-9]{4}$/;
	var noparentheses = /^[1]?[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}$/;
	
	if(parentheses.test(str.replace(/\s/g, "")) || noparentheses.test(str.replace(/\s/g, ""))) {
		return true;
	} else {
		return false;
	}
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
telephoneCheck("555-555-5555");       //should return a boolean
telephoneCheck("1 555-555-5555");     //should return true
telephoneCheck("1 (555) 555-5555");   //should return true
telephoneCheck("5555555555");         //should return true
telephoneCheck("555-555-5555");       //should return true
telephoneCheck("(555)555-5555");      //should return true
telephoneCheck("1(555)555-5555");     //should return true
telephoneCheck("555-5555");           //should return false
telephoneCheck("5555555");            //should return false
telephoneCheck("1 555)555-5555");     //should return false
telephoneCheck("1 555 555 5555");     //should return true
telephoneCheck("1 456 789 4444");     //should return true
telephoneCheck("123**&!!asdf#");      //should return false
telephoneCheck("55555555");           //should return false
telephoneCheck("(6505552368)");       //should return false
telephoneCheck("2 (757) 622-7382");   //should return false
telephoneCheck("0 (757) 622-7382");   //should return false
telephoneCheck("-1 (757) 622-7382");  //should return false
telephoneCheck("2 757 622-7382");     //should return false
telephoneCheck("10 (757) 622-7382");  //should return false
telephoneCheck("27576227382");        //should return false
telephoneCheck("(275)76227382");      //should return false
telephoneCheck("2(757)6227382");      //should return false
telephoneCheck("2(757)622-7382");     //should return false
telephoneCheck("555)-555-5555");      //should return false
telephoneCheck("(555-555-5555");      //should return false
telephoneCheck("(555)5(55?)-5555");   //should return false
