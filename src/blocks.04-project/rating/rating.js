document.addEventListener('DOMContentLoaded', () => {
  getRating();
  const rating = document.querySelector('.rating');
  const stars = rating.querySelector('.rating__stars');
  const statusBar = rating.querySelector('.rating__custom-bar');

  stars.addEventListener('click', (evt) => {
    if (!stars.classList.contains('fixed')) {
      setRating();
    }
    stars.classList.toggle('fixed');
    moveRating(evt);
  });

  stars.addEventListener('mousemove', (evt) => {
    if (!stars.classList.contains('fixed')) {
      moveRating(evt);
    }
  });

  function moveRating(evt) {
    let offsetLeft = evt.toElement.getBoundingClientRect().left;
    let progress = evt.clientX - offsetLeft;
    let rating = (progress * 5 / evt.toElement.offsetWidth).toFixed(1);
    statusBar.style.width = progress + 'px';
    statusBar.setAttribute('data-rating', `${rating}`);
  }

  async function getRating() {
    let url = 'http://localhost:8080/stubs/rating.json';
    let response = await fetch(url, {
      method: 'GET'
    })

    let maxRating = await response.json()
    maxRating = maxRating.maxRating;
    let rating = (Math.random() * maxRating).toFixed(1);
    statusBar.style.width = (130 * rating) / 5 + 'px';
    stars.classList.add('fixed');
  }

  async function setRating() {
    let url = 'http://localhost:8080/stubs/rating.json';
    let formData = new FormData();
    let rating = statusBar.getAttribute('data-rating');
    let id = statusBar.getAttribute('data-id');

    formData.append('rating', rating);
    formData.append('id', id)

    let response = await fetch(url, {
      method: 'POST',
      body: formData
    })
  }
});

