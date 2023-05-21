const form = document.querySelector('form');
const fullNameInput = document.querySelector('#full-name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (fullName === '' || email === '' || message === '') {
    alert('Kérlek töltsd ki az összes mezőt!');
    return;
  }

  const data = {
    fullName,
    email,
    message
  };

  console.log(data);

  fullNameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});
