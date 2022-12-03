const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

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

document.getElementById('clear').addEventListener('click', () => {
  input.value = '';
  input.focus();
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

function calculate() {
  const result = eval(input.value);
  resultInput.value = result;
}

document.getElementById('themeSwitcher').addEventListener('click', () => {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9');
    root.style.setProperty('--border-color', '#aaa');
    root.style.setProperty('--font-color', '#212529');
    root.style.setProperty('--primary-color', '#26834a');
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg-color', '#212529');
    root.style.setProperty('--border-color', '#666');
    root.style.setProperty('--font-color', '#f1f5f9');
    root.style.setProperty('--primary-color', '#4dff91');
    main.dataset.theme = 'dark';
  }
});
