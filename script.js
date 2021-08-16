
function add (a, b) {
	 return a + b
}

function subtract (a, b) {
 return a - b
}

function multiply(a, b){
	return a * b
}
function power(a, b) {
	return a ** b
}

function factorial(num) {
	let answer = 1
	if (num == 1 || num ==0){
		return (1)
	} else{
		for (let i = num; i >= 1; i--)
		answer = answer * i;
	}
	return answer
}


