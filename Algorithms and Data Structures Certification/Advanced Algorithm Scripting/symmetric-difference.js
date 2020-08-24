/* Mission:
 * Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
 * For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * https://www.youtube.com/watch?v=PxffSUQRkG4
 */

function symmetricDifference(arr){
  var difference = [];
  for(i=0;i<arr.length;i++)
    for(j=0;j<arr[i].length;j++){
      if(difference.indexOf(arr[i][j]) == -1)
        difference.push(arr[i][j]);
      else
        difference.splice(difference.indexOf(arr[i][j]), 1);
    }
  return difference;
}

function removeSubArrayRepeat(arr){
  var uniques = [];
  arr.forEach(function(x){
    if(uniques.indexOf(x) == -1)
      uniques.push(x);
  });  
  return uniques;
}

function sym(args){
  var noSubArrayRepeat = [];
  for(var i=0;i<arguments.length;i++)
    noSubArrayRepeat.push(removeSubArrayRepeat(arguments[i]));
  
  return symmetricDifference(noSubArrayRepeat);
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
sym([1, 2, 3], [5, 2, 1, 4]);                                                   //should return [3, 4, 5]
sym([1, 2, 3], [5, 2, 1, 4]);                                                   //should contain only three elements
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);                                           //should return [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);                                           //should contain only three elements
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);                                  //should return [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);                                  //should contain only three elements
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);                    //should return [2, 3, 4, 6, 7]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);                    //should contain only five elements
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should return [1, 2, 4, 5, 6, 7, 8, 9]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]); //should contain only eight elements
