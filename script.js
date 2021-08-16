document.getElementById('add').onclick = operand;
document.getElementById('subtract').onclick = operand;
document.getElementById('multiply').onclick = operand;
document.getElementById('divide').onclick = operand;
let operator = ''
function add (num1, num2) {
	 return num1 + num2
}

function subtract (num1, num2) {
 return num1 - num2
}

function multiply(num1, num2){
	return num1 * num2
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

function operand(){
	operator = this.id;
	console.log(operator)
}

function operate(a, b){

}

document.querySelector('.keys')
  .addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
      let value = target.innerHTML
      
      document.querySelector('#output').value += value
    }
  });

  document.querySelector('.clear')
  .addEventListener('click', event => {
	document.querySelector('#output').value = ''
	operator = ''
	num1 = ''
	num2 = ''

  })