/* Mission:
 * Return a new array that transforms the element's average altitude into their orbital periods.
 * The values should be rounded to the nearest whole number. 
 * 
 * Given:
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * The body being orbited is Earth.
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 *
 * Resources:
 * http://en.wikipedia.org/wiki/Orbital_period
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
 */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  for(i=0;i<arr.length;i++){
    arr[i].orbitalPeriod = Math.round(Math.sqrt(Math.pow((arr[i].avgAlt + earthRadius), 3) / GM) * (2 * Math.PI));
    delete arr[i].avgAlt;
  }
  
  return arr;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
//should return [{name: "sputnik", orbitalPeriod: 86400}]

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
//should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
