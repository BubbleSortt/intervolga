module.exports = {
  block: 'page',
  title: 'Ромбовидная картинка',
  content: [
    {
      cls: 'container',
      content: [
        {
          block: 'picture',
          content: [
            {tag: 'img', elem: 'img', attrs: {src: 'https://place-hold.it/400x400'}},
          ],
        },
      ],
    },
  ],
};
