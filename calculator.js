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
});
