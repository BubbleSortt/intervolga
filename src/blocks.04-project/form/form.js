document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('.form');
  let container = document.querySelector('.container');
  let submit = form.querySelector('.form__submit');
  let submitWhite = submit.querySelector('.search-white');
  let submitBlack = submit.querySelector('.search-black');
  let input = form.querySelector('.form__input');

  form.addEventListener('click', (evt) => {
    if (evt.target.dataset.callInput === 'true') {
      evt.preventDefault();
      input.classList.add('form__input_active');
      input.classList.remove('form__input_disabled');

      input.removeAttribute('disabled');
      input.setAttribute('placeholder', 'Артем Звездилин');
      input.focus();

      submitBlack.classList.add('hidden');
      submitWhite.classList.remove('hidden');
      submit.classList.add('form__submit_active');
      submit.classList.remove('form__submit_disabled');
      submit.removeAttribute('data-call-input');
    }

    if (evt.target.dataset.callInput !== 'true' && evt.target !== input && evt.target !== submit) {
      input.classList.remove('form__input_active');
      input.classList.add('form__input_disabled');

      input.setAttribute('disabled', '');
      input.removeAttribute('placeholder');

      submitBlack.classList.remove('hidden');
      submitWhite.classList.add('hidden');
      submit.classList.remove('form__submit_active');
      submit.classList.add('form__submit_disabled');
      submit.setAttribute('data-call-input','true');
    }

  });
});

