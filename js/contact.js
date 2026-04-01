/* ============================================
   FOOD ISLAND — Contact Form Handler
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  if (!form) return;

  // ── Toast Notification ──
  function showToast(message, duration = 4000) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }

  // ── Form Validation ──
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateField(input) {
    const value = input.value.trim();
    let isValid = true;

    if (input.required && !value) {
      isValid = false;
    }

    if (input.type === 'email' && value && !validateEmail(value)) {
      isValid = false;
    }

    // Visual feedback
    if (!isValid) {
      input.style.borderColor = 'var(--clr-accent)';
      input.style.boxShadow = '0 0 0 3px rgba(232,93,58,0.1)';
    } else {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    }

    return isValid;
  }

  // Real-time validation
  form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.style.borderColor) {
        validateField(input);
      }
    });
  });

  // ── Form Submission ──
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all required fields
    const requiredFields = form.querySelectorAll('[required]');
    let allValid = true;

    requiredFields.forEach(field => {
      if (!validateField(field)) {
        allValid = false;
      }
    });

    if (!allValid) {
      showToast('⚠️ Please fill in all required fields correctly.');
      // Focus first invalid field
      const firstInvalid = form.querySelector('[required]:invalid, [style*="accent"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Collect form data
    const formData = {
      firstName: document.getElementById('firstName').value.trim(),
      lastName: document.getElementById('lastName').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value.trim()
    };

    // Simulate submission (since we don't have a backend)
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      // Success
      showToast(`✅ Thank you, ${formData.firstName}! Your message has been sent. We'll get back to you soon!`, 5000);

      // Reset form
      form.reset();
      form.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
      });

      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '';

      console.log('📬 Contact form submitted:', formData);
    }, 1500);
  });

});
