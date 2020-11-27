const allTitle = document.querySelectorAll('.card__title');

allTitle.forEach(title => {
  const titleHeight = title.clientHeight;

  if (titleHeight >= 70) {
    title.classList.add('card__title_hidden');
  }
});

