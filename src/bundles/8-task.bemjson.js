module.exports = {
  block: 'page',
  title: 'Появляющийся поиск ',
  content: [
    {
      cls: 'container',
      content: [
        {
          block: 'form',
          content: [
            {
              elem: 'field',
              content: [
                {
                  tag: 'input',
                  elem: 'input',
                  mix: {block: 'form', elem: 'input', elemMods: {disabled: true}},
                  attrs: {type: 'search', disabled: true},
                },
                {
                  tag: 'button',
                  elem: 'submit',
                  mix: {block: 'form', elem: 'submit', elemMods: {disabled: true}},
                  attrs: {'type': 'submit', 'data-call-input': 'true'},
                  content: [
                    {
                      tag: 'img',
                      cls: 'search-black',
                      attrs: {'src': './images/search-black.svg', 'data-call-input': 'true'},
                    },
                    {tag: 'img', cls: 'search-white hidden', attrs: {src: './images/search-white.svg'}},
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
