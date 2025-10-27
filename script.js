const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Calculator Logic
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === 'C') {
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});

// Dark Mode Toggle
modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  modeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});
