const form = document.querySelector('.form');
const submit = form.querySelector('.send__submit');

async function sendForm() {
  const form = document.querySelector('.form');
  const rangeFrom = form.querySelector('.range__from').value;
  const rangeTo = form.querySelector('.range__to').value;
  const availability = form.querySelector('.availability__checkbox').checked;
  const brandlist =
    form.querySelector('.select2-selection__rendered')
    .querySelectorAll('.select2-selection__choice');
  let allBrand = 'all';

  if (brandlist.length >= 1) {
    allBrand = [];
    brandlist.forEach((brand) => {
      allBrand.push(brand.getAttribute('title'))
    })
  }
  let formData = new FormData(form);

  formData.append('rangeFrom', rangeFrom);
  formData.append('rangeTo', rangeTo);
  formData.append('availability', availability);
  formData.append('allBrand', allBrand);

  let response = await fetch('url', {
    method: 'POST',
    body: formData
  })
}

submit.addEventListener('click', (evt)=> {
  evt.preventDefault()
  sendForm()
})

