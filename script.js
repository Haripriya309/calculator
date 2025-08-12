// Function to handle button clicks
function appendValue(value) {
  const display = document.getElementById('display');
  display.value += value;
  updateResult();
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
  updateResult();
}

// Function to delete last character
function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
  updateResult();
}

// Function to calculate the result
function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value) || "";
    updateResult();
  } catch {
    display.value = 'Error';
  }
}

// Real-time result update
function updateResult() {
  const display = document.getElementById('display');
  if (display.value === '') {
    display.value = '';
  }
}

// Listen for keyboard input
document.addEventListener('keydown', function(e) {
  const key = e.key;
  const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                     '/', '*', '-', '+', '.', '%', 'Enter', 'Backspace', 'c'];

  if (validKeys.includes(key)) {
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      deleteLast();
    } else if (key.toLowerCase() === 'c') {
      clearDisplay();
    } else {
      appendValue(key);
    }
  }
});
