// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('travelForm');
  const messages = document.getElementById('formMessages');
  const budget = document.getElementById('budget');
  const budgetOutput = document.getElementById('budgetOutput');

  // If there's no form on the page, nothing to wire up.
  if (!form) return;

  // Ensure messages container exists
  if (!messages) {
    // create non-intrusive messages container after the form
    const m = document.createElement('div');
    m.id = 'formMessages';
    m.setAttribute('role', 'status');
    form.prepend(m);
  }

  // Update budget display if elements are present
  if (budget && budgetOutput) {
    budgetOutput.textContent = budget.value;
    budget.addEventListener('input', () => { budgetOutput.textContent = budget.value; });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msgEl = document.getElementById('formMessages');
    if (msgEl) msgEl.textContent = '';

    // simple HTML5 checks
    if (!form.checkValidity()) {
      // Collect friendly messages
      const invalid = Array.from(form.elements).filter(el => el.willValidate && !el.checkValidity());
      const lines = invalid.map(el => {
        if (el.validationMessage) return `${el.labels?.[0]?.innerText || el.name}: ${el.validationMessage}`;
        return `${el.name} is invalid`;
      });
      if (msgEl) {
        msgEl.textContent = 'Please fix the following:\n' + lines.join('\n');
        msgEl.style.color = 'crimson';
      } else {
        alert('Please fix the form fields.');
      }
      invalid[0]?.focus();
      return;
    }

    // Mock form processing (replace with real endpoint if available)
    if (msgEl) {
      msgEl.style.color = 'green';
      msgEl.textContent = 'Thanks — your form was validated (demo).';
    } else {
      alert('Thanks — your form was validated (demo).');
    }
    form.reset();
    if (budgetOutput && budget) budgetOutput.textContent = budget.value;
  });
});
