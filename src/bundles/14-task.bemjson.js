module.exports = {
  block: 'page',
  title: 'Умный фильтр',
  content: [
    {
      cls: 'container',
      content: [
        {
          tag: 'form',
          block: 'form',
          content: [
            {
              block: 'range',
              mix: {block: 'form', elem: 'item'},
              content: [
                {
                  tag: 'h3',
                  content: 'Цена товара (р)',
                  mix: {block: 'form', elem: 'title'},
                },
                {
                  tag: 'input', elem: 'input', attrs: {type: 'text'},
                },
                {
                  elem: 'preview',
                  content: [
                    {tag: 'input', elem: 'from', attrs: {type: 'text'}},
                    {elem: 'divide', content: '-'},
                    {tag: 'input', elem: 'to', attrs: {type: 'text'}},
                  ],
                },
              ],
            },
            {
              block: 'availability',
              mix: {block: 'form', elem: 'item'},
              content: [
                {
                  tag: 'h3',
                  content: 'Наличие',
                  mix: {block: 'form', elem: 'title'},
                },
                {
                  elem: 'checkbox-wrap',
                  content: [
                    {
                      tag: 'input',
                      elem: 'checkbox',
                      attrs: {type: 'checkbox', id: 'checkbox-availability'},
                    },
                    {
                      tag: 'label',
                      elem: 'label',
                      content: 'Да',
                      attrs: {for: 'checkbox-availability'},
                    },
                  ],
                },
              ],
            },
            {
              block: 'brand',
              mix: {block: 'form', elem: 'item'},
              content: [
                {
                  tag: 'h3',
                  content: 'Бренд',
                  mix: {block: 'form', elem: 'title'},
                },
                {
                  tag: 'select',
                  elem: 'select',
                  attrs: {multiple: true},
                  content: [
                    {tag: 'option', content: 'AURORA'},
                    {tag: 'option', content: 'Ресанта'},
                    {tag: 'option', content: 'Philips'},
                    {tag: 'option', content: 'Сибртех'},
                    {tag: 'option', content: 'Samsung'},
                    {tag: 'option', content: 'Apple'},
                    {tag: 'option', content: 'Toshiba'},
                  ],
                },
              ],
            },
            {
              block: 'send',
              mix: {block: 'form', elem: 'item'},
              content: [
                {
                  tag: 'button',
                  elem: 'submit',
                  content: 'Отправить',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};


