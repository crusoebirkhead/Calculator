document.getElementById('add').onclick = operand;
document.getElementById('subtract').onclick = operand;
document.getElementById('multiply').onclick = operand;
document.getElementById('divide').onclick = operand;
let operator = ''
let output = document.querySelector('#output')

//Operations
function add (num1, num2) {
	 return num1 + num2
}

function subtract (num1, num2) {
 return num1 - num2
}

function multiply(num1, num2){
	return num1 * num2
}

function divide (num1, num2){
	return num1 / num2

}
function power(num1, num2) {
	return num1 ** num2
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

//Brings in operand from calculator
function operand(){
	operator = this.id;
	num1 = parseInt(output.value, 10)
	output.value = ''
}

//Calls on operand 
document.querySelector('.key-equal')
.addEventListener('click', event => {
	num2 = Number(output.value)
	console.log(num2)
	if (operator === 'add'){
		// return add(num1, num2)
		output.value = add(num1, num2)
	}
	if (operator === 'subtract'){
		// return subtract(num1, num2)
		output.value = subtract(num1, num2)
	}
	if (operator === 'multiply'){
		// return multiply(num1, num2)
		output.value = multiply(num1, num2)
	}
	if (operator === 'divide'){
		// return divide(num1, num2)
		output.value = divide(num1, num2)
	}
})
	

//Display numbers clicked in output
document.querySelector('.keys')
.addEventListener('click', event => {
    let target = event.target;
    if (target.matches('.key')) {
      let value = target.innerHTML

      document.querySelector('#output').value += value
    }
  });

  //Clear button function
  document.querySelector('.clear')
  .addEventListener('click', event => {
	document.querySelector('#output').value = ''
	operator = ''
	num1 = ''
	num2 = ''
  })





