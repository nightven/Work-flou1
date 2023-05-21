document.addEventListener('DOMContentLoaded', function () {
  // Модальні вікна
  const modals = ['data-mobile-menu', 'data-order', 'data-thank-you'];

  modals.forEach(element => {
    const openModalSelector = `[${element}-open]`;
    const closeModalSelector = `[${element}-close]`;
    const openModalBtns = document.querySelectorAll(openModalSelector);
    const closeModalBtns = document.querySelectorAll(closeModalSelector);
    const modal = document.querySelector(`[${element}]`);

    if (!modal) logModalError('Can`t find Modal with attribute ' + modal);
    if (openModalBtns.length === 0)
      logModalError(
        'Can`t find Open modal button with attribute ' + openModalSelector
      );
    if (closeModalBtns.length === 0)
      logModalError(
        'Can`t find Close modal button with attribute ' + closeModalSelector
      );

    openModalBtns.forEach(openBtn =>
      openBtn.addEventListener('click', toggleModal)
    );
    closeModalBtns.forEach(closeBtn =>
      closeBtn.addEventListener('click', toggleModal)
    );

    function toggleModal(evt) {
      evt.preventDefault();
      document.body.classList.toggle('modal-open');
      modal.classList.toggle('is-hidden');
    }
  });

  // Валідація форми
  const form = document.querySelector('#myForm');
  const submitButton = document.querySelector('#submitButton');
  const fullnameInput = document.querySelector('#fullname');
  const emailInput = document.querySelector('#emailform');
  const cardInput = document.querySelector('#card');
  const resetButton = document.querySelector('#resetButton');

  form.addEventListener('submit', validateForm);
  fullnameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);
  cardInput.addEventListener('input', validateForm);
  resetButton.addEventListener('click', resetForm);

  function validateForm(event) {
    event.preventDefault();

    const nameValue = fullnameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const cardValue = cardInput.value.trim();

    const emailPattern = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
    const isEmailValid = emailPattern.test(emailValue);

    if (nameValue === '' || !isEmailValid || cardValue === '') {
      submitButton.disabled = true;
    } else {
      submitButton.disabled = false;
    }
  }

  function resetForm() {
    form.reset();
    submitButton.disabled = true;
  }

  function logModalError(text) {
    const styles = 'color: #bada55';
    console.log('%c' + text, styles);
  }
});
