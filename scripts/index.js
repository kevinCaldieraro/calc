import { calculate } from './calculate.js';
import { themeSwitcher } from './themeSwitcher.js';
import { copyToClipboard } from './copyToClipboard.js';
import { clear } from './clear.js';

const input = document.getElementById('input');

const allowedKeys = [
  '(',
  ')',
  '/',
  '*',
  '-',
  '+',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
  '0',
  '.',
  '%',
  ' '
];

document.querySelectorAll('.charKey').forEach(charKeyBtn => {
  charKeyBtn.addEventListener('click', () => {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

input.addEventListener('keydown', ev => {
  ev.preventDefault();
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
  }

  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1);
  }

  if (ev.key === 'Enter') {
    calculate();
  }
});

document.getElementById('equal').addEventListener('click', calculate);

document.getElementById('clear').addEventListener('click', clear);

document
  .getElementById('themeSwitcher')
  .addEventListener('click', themeSwitcher);

document
  .getElementById('copyToClipboard')
  .addEventListener('click', copyToClipboard);
