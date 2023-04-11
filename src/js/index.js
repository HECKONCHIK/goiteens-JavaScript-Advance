import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import userObj from './export-default';

console.log(userObj);

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', debounce(onMouseMove, 250));
function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}
/*
 * Input i debounce
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', throttle(onInputChange, 2500));
function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кількість викликів onInputChange: ${inputCbInvocationCounter},
    Значення: ${event.target.value}
  `;
}