const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

function updateDisplay() {
  display.value = currentInput || '0';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
  } catch {
    currentInput = 'Error';
  }
  updateDisplay();
}

function handleInput(input) {
  if (input === 'C') {
    currentInput = '';
  } else if (input === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (input === '=') {
    calculateResult();
    return;
  } else {
    currentInput += input;
  }
  updateDisplay();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    handleInput(button.getAttribute('data-key'));
  });
});

// Bonus: Keyboard support
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.=BackspaceEnter';
  if (allowedKeys.includes(e.key)) {
    if (e.key === 'Enter') {
      handleInput('=');
    } else {
      handleInput(e.key);
    }
  } else if (e.key === 'c' || e.key === 'C') {
    handleInput('C');
  }
});
