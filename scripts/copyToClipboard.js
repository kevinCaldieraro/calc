export function copyToClipboard(ev) {
  const button = ev.currentTarget;
  const resultInput = document.getElementById('result');

  if (button.innerText === 'Copy') {
    button.innerText = 'Copied!';
    button.classList.add('success');
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = 'Copy';
    button.classList.remove('success');
  }
}
