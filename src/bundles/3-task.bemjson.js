module.exports = {
  block: 'page',
  title: 'Рейтинг из звездочек с бекендом',
  content: [
    {
      cls: 'container',
      content: [
        {
          block: 'rating',
          content: [
            {tag: 'div', elem: 'stars'},
            {tag: 'p', elem: 'custom-bar', attrs: {'data-id': '45', 'data-rating': ''}},
          ],
        },
      ],
    },
  ],
};
