const form = document.getElementById('contact-form');
const message = document.getElementById('form-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  message.innerText = "Thanks for reaching out, " + document.getElementById('name').value + "! I'll get back to you soon.";
  form.reset();
});