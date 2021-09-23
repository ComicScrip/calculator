const firstValueInput = document.querySelector('#firstValueInput');
const secondValueInput = document.querySelector('#secondValueInput');
const operatorInput = document.querySelector('#operator');
const calculateBtn = document.querySelector('#calculateBtn');

console.log(firstValueInput);
console.log(secondValueInput);
console.log(operatorInput);
console.log(calculateBtn);

calculateBtn.addEventListener('click', function () {
  console.log('computing the result...');

  const firstValue = parseInt(firstValueInput.value, 10);
  const secondValue = parseInt(secondValueInput.value, 10);
  const operator = operatorInput.value;
  let result = '';

  console.log('first value : ', firstValue);
  console.log('second value : ', secondValue);
  console.log('operator : ', operator);
  console.log('result', result);
});
