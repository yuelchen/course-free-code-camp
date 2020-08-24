/* Mission:
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). 
 * Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 * 
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
 
function whatIsInAName(collection, source) {
	var arr = [];
	
	while(collection.length > 0) {
		var object = collection.shift();
		var keys = Object.keys(source);
		var flag = true;
		
		for(i=0;i<keys.length;i++) {
			if(!(object.hasOwnProperty(keys[i])) || object[keys[i]] != source[keys[i]]) {
				flag = false;
			}
		}
		
		if(flag){
			arr.push(object);
		}
	}
	
	return arr;
}
 
/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//should return [{ first: "Tybalt", last: "Capulet" }]

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }); 
//should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }); 
//should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); 
//should return [{ "a": 1, "b": 2, "c": 2 }]
