module.exports = {
  block: 'page',
  title: 'Плитка товаров с карточками разной высоты',
  content: [
    {
      block: 'container',
      content: [
        {
          block: 'market',
          content: [
            {
              elem: 'list',
              content: [
                {
                  block: 'market-item',
                  mix: {block: 'market', elem: 'item'},
                  content: [
                    {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x300'}},
                    {
                      mix: {block: 'market-item', elem: 'caption'},
                      block: 'caption',
                      content: [
                        {elem: 'title', tag: 'h3', content: 'Название'},
                        {elem: 'description', tag: 'p', content: 'Описание'},
                        {elem: 'btn', tag: 'a', content: 'Купить', attrs: {href: '#'}},
                      ],
                    },
                  ],
                },
                {
                  block: 'market-item',
                  mix: {block: 'market', elem: 'item'},
                  content: [
                    {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x400'}},
                    {
                      mix: {block: 'market-item', elem: 'caption'},
                      block: 'caption',
                      content: [
                        {elem: 'title', tag: 'h3', content: 'Длинное Название'},
                        {
                          elem: 'description',
                          tag: 'p',
                          content: 'Длинное описание товара, может даже в пару абзацев текста',
                        },
                        {elem: 'btn', tag: 'a', content: 'Купить', attrs: {href: '#'}},
                      ],
                    },
                  ],
                },
                {
                  block: 'market-item',
                  mix: {block: 'market', elem: 'item'},
                  content: [
                    {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x200'}},
                    {
                      mix: {block: 'market-item', elem: 'caption'},
                      block: 'caption',
                      content: [
                        {elem: 'title', tag: 'h3', content: 'Название'},
                        {elem: 'description', tag: 'p', content: ''},
                        {elem: 'btn', tag: 'a', content: 'Купить', attrs: {href: '#'}},
                      ],
                    },
                  ],
                },
                {
                  block: 'market-item',
                  mix: {block: 'market', elem: 'item'},
                  content: [
                    {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x300'}},
                    {
                      mix: {block: 'market-item', elem: 'caption'},
                      block: 'caption',
                      content: [
                        {elem: 'title', tag: 'h3', content: 'Название в пару строк'},
                        {elem: 'description', tag: 'p', content: ''},
                        {elem: 'btn', tag: 'a', content: 'Купить', attrs: {href: '#'}},
                      ],
                    },
                  ],
                },
                {
                  block: 'market-item',
                  mix: {block: 'market', elem: 'item'},
                  content: [
                    {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x400'}},
                    {
                      mix: {block: 'market-item', elem: 'caption'},
                      block: 'caption',
                      content: [
                        {elem: 'title', tag: 'h3', content: 'Название'},
                        {
                          elem: 'description',
                          tag: 'p',
                          content: 'Длинное описание товара, может даже в пару абзацев текста',
                        },
                        {elem: 'btn', tag: 'a', content: 'Купить', attrs: {href: '#'}},
                      ],
                    },
                  ],
                },
                {
                  block: 'market-item',
                  mix: {block: 'market', elem: 'item'},
                  content: [
                    {elem: 'img', tag: 'img', attrs: {src: 'http://placehold.it/300x200'}},
                    {
                      mix: {block: 'market-item', elem: 'caption'},
                      block: 'caption',
                      content: [
                        {elem: 'title', tag: 'h3', content: 'Длинное название товара'},
                        {
                          elem: 'description',
                          tag: 'p',
                          content: 'Длинное описание товара, может даже в пару абзацев текста',
                        },
                        {elem: 'btn', tag: 'a', content: 'Купить', attrs: {href: '#'}},
                      ],
                    },
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
