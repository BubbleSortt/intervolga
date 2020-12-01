module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    {
      cls: 'container',
      content: [
        {
          tag: 'header',
          block: 'header',
          mix: {block: 'page', elem: 'header'},
          content: 'Это header',
        },
        {
          tag: 'aside',
          block: 'aside',
          mix: {block: 'page', elem: 'aside'},
          content: 'aside 1',
        },
        {
          tag: 'main', block: 'main', mix: {block: 'page', elem: 'main'},
          content: [
            {
              tag: 'img',
              block: 'main-content',
              mix: {block: 'main', elem: 'content'},
              attrs: {src: './images/Back.jpg', width: '200px'},
            },
            'Это main',
          ],
        },
        {
          tag: 'aside',
          block: 'aside',
          mix: {block: 'page', elem: 'aside'},
          content: 'aside 2',
        },

        {
          tag: 'footer',
          block: 'footer',
          mix: {block: 'page', elem: 'footer'},
          content: 'Это footer',
        },
      ],
    },
  ],
};
