let inputElem = document.querySelector('.show-input');
let showResult = document.querySelector('.show-result');


function clearInput() {
  inputElem.value = '';
  showResult.innerHTML = ''
}

function showInInput(input) {
  inputElem.value += input;
}

function deleteLast() {
  inputElem.value = inputElem.value.slice(0, -1);
}

function calculate() {
  let reslut = eval(inputElem.value);
  showResult.textContent = reslut;
}