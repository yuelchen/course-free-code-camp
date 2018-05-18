/* Mission:
 * If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
 * If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
 * If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
 * If value is empty (""), delete the given prop property from the album.
 * Your function must always return the entire collection object.
 * 
 * Given:
 * You are given a JSON object representing a part of your musical album collection. 
 * Each album has several properties and a unique id number as its key. 
 * Not all albums have complete information.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * https://www.freecodecamp.org/challenges/accessing-objects-properties-with-variables
 * https://www.freecodecamp.org/challenges/manipulating-complex-objects
 */

var collection = {
    "2548" : { "album":"Slippery When Wet", "artist":"Bon Jovi", "tracks":["Let It Rock", "You Give Love a Bad Name"] },
    "2468" : { "album":"1999", "artist":"Prince", "tracks":["1999", "Little Red Corvette"] },
    "1245" : { "artist":"Robert Palmer", "tracks":[] },
    "5439" : { "album":"ABBA Gold" }
};

function updateRecords(id, prop, value){
  id = id.toString();
  if(prop != "tracks" && value != "")
    collection[id][prop] = value;
  else if(prop == "tracks" && value != ""){
    if(collection[id][prop])
      collection[id][prop].push(value);
    else
      collection[id][prop] = [value];
  }
  else if(value == "")
    delete collection[id][prop];
  return collection;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
updateRecords(5439, "artist", "ABBA");                //artist should be "ABBA"
updateRecords(5439, "tracks", "Take a Chance on Me"); //tracks should have "Take a Chance on Me", as the last element
updateRecords(2548, "artist", "");                    //artist should not be set
updateRecords(1245, "tracks", "Addicted to Love");    //tracks should have "Addicted to Love", as the last element
updateRecords(2468, "tracks", "Free");                //tracks should have "1999", as the first element
updateRecords(2548, "tracks", "");                    //tracks should not be set
