/* Mission:
 * Sum all the prime numbers up to and including the provided number.
 * A prime number is defined as a number greater than one and having only two divisors, one and itself.
 * 
 * Given:
 * The provided number may not be a prime.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 */
 
var primePow = [];
var primes = [];

function divideByPrimes(num){
  var flag = true;
  primes.forEach(function(index){
    if(num % index == 0)
      flag = false;
  });
  return flag;
}

function sum(){
  var total = 0;
  primes.forEach(function(index){
    total += index;
  });
  return total;
}

function sumPrimes(num){
  if(num == 1){
    primes.push(num);
  }
  else{
    for(i=2;i<=num;i++){
      if(((i == 2) || (i % 2 != 0)) && ((i == 3) || (i % 3 != 0)) && ((i == 5) || (i % 5 != 0)) && !(primePow.includes(i)) && (divideByPrimes(i))){
        if(Math.pow(i,2) <= num)
          primePow.push(Math.pow(i, 2));
        primes.push(i);
      }
    }
  }
  return sum();
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
sumPrimes(10);  //should return a number
sumPrimes(10);  //should return 17
sumPrimes(977); //should return 73156
