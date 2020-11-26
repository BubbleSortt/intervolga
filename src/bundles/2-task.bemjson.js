module.exports = {
  block: 'page',
  title: 'Центрирование по высоте',
  content: [
    {
      cls: 'container',
      content: [
        {
          block: 'form-wrap', content: [
            {
              block: 'form',
              content: [
                {
                  block: 'login', mix: {block: 'form', elem: 'input-wrap'},
                  content: [
                    {elem: 'label', tag: 'label', attrs: {for: 'login'}, content: 'Введите логин:'},
                    {elem: 'input', tag: 'input', attrs: {id: 'login', name: 'login', type: 'text', placeholder: 'Артём Звездилин'}},
                  ],
                },
                {
                  block: 'password', mix: {block: 'form', elem: 'input-wrap'},
                  content: [
                    {elem: 'label', tag: 'label', attrs: {for: 'password'}, content: 'Введите пароль:'},
                    {elem: 'input', tag: 'input', attrs: {id: 'password', name: 'password', type: 'password'}},
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