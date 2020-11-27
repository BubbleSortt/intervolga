module.exports = {
  block: 'page',
  title: 'Обрезание текста добавлением накрывающей непрозрачности',
  content: [
    {
      cls: 'container',
      content: [
        {
          tag: 'div',
          block: 'list', content: [
            {
              block: 'card',
              mix: {block: 'list', elem: 'item'},
              content: [
                {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x300'}},
                {elem: 'title', tag: 'h3', content: 'Очень длинное название и много букв'},
              ],
            },
            {
              block: 'card',
              mix: {block: 'list', elem: 'item'},
              content: [
                {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x300'}},
                {elem: 'title', tag: 'h3', content: 'Ну норм типа'},
              ],
            },
            {
              block: 'card',
              mix: {block: 'list', elem: 'item'},
              content: [
                {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x300'}},
                {elem: 'title', tag: 'h3', content: 'Достаточно длинное название'},
              ],
            },
            {
              block: 'card',
              mix: {block: 'list', elem: 'item'},
              content: [
                {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x300'}},
                {elem: 'title', tag: 'h3', content: 'Не знаю зачем здесь 4 блок'},
              ],
            },
          ],
        },
      ],
    },
  ],
};
