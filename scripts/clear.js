export function clear() {
  const resultInput = document.getElementById('result');
  input.value = '';
  resultInput.value = '';
  resultInput.classList.remove('error');
  input.focus();
}
