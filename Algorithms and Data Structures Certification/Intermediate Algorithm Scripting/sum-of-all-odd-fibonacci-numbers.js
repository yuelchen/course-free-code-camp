/* Mission:
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. 
 * Every additional number in the sequence is the sum of the two previous numbers.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
 */

function sumOdd(total, num) {
	if(num % 2 != 0) {
		return total + num;
	} else {
		return total;
	}
}

function sumFibonacci(num){
	var current = 1;
	var previous = 1;
	var sequence = [1];
  
	while(current <= num) {
		var holder = current;
		current += previous;
		previous = holder;
		sequence.push(previous);
	}
	
	return sequence.reduce(sumOdd);
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
sumFibs(1);        //should return a number
sumFibs(1000);     //should return 1785
sumFibs(4000000);  //should return 4613732
sumFibs(4);        //should return 5
sumFibs(75024);    //should return 60696
sumFibs(75025);    //should return 135721
