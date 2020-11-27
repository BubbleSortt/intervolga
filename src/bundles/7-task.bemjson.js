module.exports = {
  block: 'page',
  title: 'Прозрачная граница на пересечении с заголовком',
  content: [
    {
      cls: 'container',
      content: [
        {
          block: 'wrap',
          tag: 'fieldset',
          content: [
            {tag: 'legend', elem: 'title', content: 'Артем Звездилин?', attrs: {align: 'center'}},
            {tag: 'p', elem: 'text', content: 'Артем Звездилин Артем Звездилин Артем Звездилин Артем Звездилин Артем Звездилин Артем Звездилин Артем Звездилин Артем Звездилин Артем Звездилин'},
          ],
        },
      ],
    },
  ],
};