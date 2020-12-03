module.exports = {
  block: 'page',
  title: 'Связанные списки',
  content: [
    {
      cls: 'container',
      content: [
        {
          tag: 'form',
          block: 'form',
          content: [
            {
              tag: 'select',
              block: 'mark',
              mix: {block: 'form', elem: 'select'},
              content: [
                {tag: 'option', content: 'Не выбрано', attrs: {value: '-1'}},
              ],
            },
            {
              tag: 'select',
              block: 'model',
              mix: {block: 'form', elem: 'select'},
              content: [
                {tag: 'option', content: 'Не выбрано', attrs: {value: '-1'}},
              ],
            },
            {
              tag: 'select',
              block: 'mods',
              mix: {block: 'form', elem: 'select'},
              content: [
                {tag: 'option', content: 'Не выбрано'},
              ],
            },
          ],
        },
      ],
    },
  ],
};
