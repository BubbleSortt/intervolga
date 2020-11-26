module.exports = {
  block: 'page',
  title: 'Пункты меню равной ширины',
  content: [
    {
      block: 'header',
      content: [
        {
          cls: 'container',
          content: [
            {
              block: 'nav', mix: {block: 'header', elem: 'nav'},
              content: [
                {
                  tag: 'ul', elem: 'list',
                  content: [
                    {tag: 'li', elem: 'item',
                      content: [
                        {tag: 'a', elem: 'link', content: 'Мужские часы'},
                      ],
                    },
                    {tag: 'li', elem: 'item',
                      content: [
                        {tag: 'a', elem: 'link', content: 'Женские часы'},
                      ],
                    },
                    {tag: 'li', elem: 'item',
                      content: [
                        {tag: 'a', elem: 'link', content: 'Бренды'},
                      ],
                    },
                    {tag: 'li', elem: 'item',
                      content: [
                        {tag: 'a', elem: 'link', content: 'О компании'},
                      ],
                    },
                    {tag: 'li', elem: 'item',
                      content: [
                        {tag: 'a', elem: 'link', content: 'Новости'},
                      ],
                    },
                    {tag: 'li', elem: 'item',
                      content: [
                        {tag: 'a', elem: 'link', content: 'Магазины'},
                      ],
                    },
                    {tag: 'li', elem: 'item',
                      content: [
                        {tag: 'a', elem: 'link', content: 'Акции'},
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
