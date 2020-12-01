module.exports = {
  block: 'page',
  title: 'Нестандартное поле ввода',
  content: [
    {
      cls: 'container',
      content: [
        {
          block: 'field',
          content: [
            {
              elem: 'input',
              tag: 'input',
              attrs: {id: '1'},
            },
            {tag: 'label', elem: 'label', content: 'Ваше имя'},
          ],
        },
      ],
    },
  ],
};
