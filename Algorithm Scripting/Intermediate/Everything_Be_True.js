/* Mission:
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 */

function truthCheck(collection, pre) {
  var exists = true;
  collection.forEach(function(index){
    if(!(index.hasOwnProperty(pre)) || index[pre] == null || index[pre] == 0 || index[pre].toString() == "NaN")
      exists = false;
  });
  return exists;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
//should return true

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
//should return false

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"); 
//should return false
