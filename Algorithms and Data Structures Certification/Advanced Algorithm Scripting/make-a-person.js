/* Mission:
 * Fill in the object constructor with the following methods below:
 * - getFirstName()
 * - getLastName()
 * - getFullName()
 * - setFirstName(first)
 * - setLastName(last)
 * - setFullName(firstAndLast)
 *
 * The methods that take an argument must accept only one argument and it has to be a string.
 * These methods must be the only available means of interacting with the object.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
 */

/* Person object definition; takes in a single argument when created. 
 * 
 * firstAndLast - a string value representing a persons name. 
 */
var Person = function(firstAndLast) {
	//splits the persons name by space delimiter
	var name = firstAndLast.split(" ");
    
	//retrieves the persons first name
	this.getFirstName = function(){
		return name[0];
	};
	
	//retrieves the persons last name
	this.getLastName = function(){
		return name[name.length-1];
	};
	
	//retrieves the full name (first and last)
	this.getFullName = function(){
		return name[0] + " " + name[name.length-1];
	};
	
	//sets the persons first name
	this.setFirstName = function(first){
		name[0] = first;
	};
	
	//sets the persons last name
	this.setLastName = function(last){
		name[name.length-1] = last;
	};
	
	//sets the full name (first and last)
	this.setFullName = function(firstAndLast){
		name = firstAndLast.split(" ");
	};
};

// Initializes a variable named bob with Person object.
var bob = new Person('Bob Ross');

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
Object.keys(bob).length;  //should return 6
bob instanceof Person;    //should return true
bob.firstName;            //should return undefined
bob.lastName;             //should return undefined
bob.getFirstName();       //should return "Bob"
bob.getLastName();        //should return "Ross"
bob.getFullName();        //should return "Bob Ross"
bob.getFullName();        //should return "Haskell Ross" after bob.setFirstName("Haskell")
bob.getFullName();        //should return "Haskell Curry" after bob.setLastName("Curry")
bob.getFullName();        //should return "Haskell Curry" after bob.setFullName("Haskell Curry")
bob.getFirstName();       //should return "Haskell" after bob.setFullName("Haskell Curry")
bob.getLastName();        //should return "Curry" after bob.setFullName("Haskell Curry")
