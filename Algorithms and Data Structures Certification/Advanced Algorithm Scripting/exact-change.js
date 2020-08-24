/* Mission:
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
 * Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
 * Return the string "Closed" if cash-in-drawer is equal to the change due.
 * Otherwise, return change in coin and bills, sorted in highest to lowest order.
 * 
 * Given:
 * cid is a 2D array listing available currency.
 *
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

function getValue(bill) {
	var value = 0;
	switch(bill) {
		case "ONE HUNDRED":
			value = 100.00;
			break;
		case "TWENTY":
			value = 20.00;
			break;
		case "TEN":
			value = 10.00;
			break;
		case "FIVE":
			value = 5.00;
			break;
		case "ONE":
			value = 1.00;
			break;
		case "QUARTER":
			value = 0.25;
			break;
		case "DIME":
			value = 0.10;
			break;
		case "NICKEL":
			value = 0.05;
			break;
		case "PENNY":
			value = 0.01;
			break;
	}
	
	return value;
}

function registerTotal(cid) {
	var total = 0;
	cid.forEach(function(type) { 
		total += type[1]; 
	});
  
	return total;
}

function checkCashRegister(price, cash, cid) {
	var change = []; 
	var difference = cash - price;
  
	cid.reverse().forEach(function(type, index) {
		if(difference > 0) {
			var count = Math.floor(difference / getValue(type[0]));
			if(difference >= type[1] && count > 0) {
				change.push([type[0], type[1]]);
				difference = Math.round((difference - type[1]) * 100) / 100;
				cid[index][1] = 0;
			} else if(difference < type[1] && count > 0) {
				var total = getValue(type[0]) * count;
				change.push([type[0], total]);
				difference = Math.round((difference - total) * 100) / 100;
				cid[index][1] -= total;
			}
		}
	});
  
	if(difference > 0) {
		return "Insufficient Funds";
	} else if(registerTotal(cid) == 0) {
		return "Closed";
	} else {
		return change;
	}
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//should return an array

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
//should return a string

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
//should return a string

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//should return [["QUARTER", 0.50]]

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); 
//should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//should return "Insufficient Funds"

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); 
//should return "Insufficient Funds"

checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//should return "Closed"
