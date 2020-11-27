module.exports = {
  block: 'page',
  title: 'Появляющийся поиск ',
  content: [
    {
      cls: 'container',
      content: [
        {
          block: 'call-input',
          tag: 'button',
          content: [
            {tag: 'img', attrs: {src: './images/search-black.svg'}},
          ],
        },
        {
          block: 'search-wrap',
          content: [
            {
              block: 'form',
              mix: {block: 'search-wrap', elem: 'item'},
              content: [
                {tag: 'input', elem: 'input', attrs: {type: 'text', placeholder: 'Артем Звездилин'}},
                {tag: 'button', elem: 'submit', attrs: {type: 'submit'},
                content: [
                  {tag: 'img', attrs: {src: './images/search-white.svg'}},
                ]},
              ],
            },
          ],
        },
      ],
    },
  ],
};
