// звіритись чи все вірно зробили можна тут https://github.com/kashirin-olexsandr/multi-modal
document.addEventListener(
  'DOMContentLoaded',
  function () {
    // виберіть ваше меню тут
    const modals = ['data-mobile-menu', 'data-order', 'data-thank-you'];

    modals.forEach(element => {
      // дл відкриття модалки на кнопку  додаємо атрибут "your-data-modal"-open
      const openModalSelector = element + '-open';
      // для закриття модалки на ваку кнопку додаємо атрибут "your-data-modal"-close
      const closeModalSelector = element + '-close';

      const openModalBtns = document.querySelectorAll(`[${openModalSelector}]`);
      const closeModalBtns = document.querySelectorAll(
        `[${closeModalSelector}]`
      );
      const modal = document.querySelector(`[${element}]`);
      //перевірка що змінна modal не пуста
      if (!modal) logModalError('Can`t find Modal with attribute ' + modal);
      if (openModalBtns.length === 0)
        logModalError(
          'Can`t find Open modal button with attribute ' + openModalSelector
        );
      if (closeModalBtns.length === 0)
        logModalError(
          'Can`t find Close modal button with attribute ' + closeModalSelector
        );
      if (!modal || openModalBtns.length === 0 || closeModalBtns.length === 0)
        return;

      openModalBtns.forEach(openBtn =>
        openBtn.addEventListener('click', toggleModal)
      );
      // закриття модалки
      closeModalBtns.forEach(closeBtn =>
        closeBtn.addEventListener('click', toggleModal)
      );
      // closeModalBtns.forEach(closeBtn =>
      //   body.addEventListener('keyup', toggleModal)
      // );

      // function toggleModal() {
      //   document.body.classList.toggle('modal-open');
      //   modal.classList.toggle('is-hidden');
      // }
      function toggleModal(evt) {
        evt.preventDefault();
        document.body.classList.toggle('modal-open');
        modal.classList.toggle('is-hidden');
      }
    });
  },
  false
);


function logModalError(text) {
  const styles = 'color: #bada55';
  console.log('%c' + text, styles);
}

// мінімальна валідація формми
const submitButton = document.querySelector('#submitButton');

function validateForm(event) {
  event.preventDefault();

  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const cardInput = document.querySelector('#card');

  // перевірка полів форми...

  // перевірка на те що поля не пусті
  if (
    nameInput.value.trim() === '' ||
    emailInput.value.trim() === ''|| 
    cardInput.value.trim() === ''
  ) {
    submitButton.disabled = true; // Деактивація кннопки submit
    return;
  }

  // можна ще додати перевірку паттерна в js

  // коли всі поля не пусті, тоді кнопка активна
  submitButton.disabled = false;
}