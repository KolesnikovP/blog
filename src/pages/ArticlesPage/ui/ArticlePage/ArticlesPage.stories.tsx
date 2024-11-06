import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticlesPage from './ArticlesPage';

const data = {
  id: '21',
  title: 'Dart news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://admin.davidson.fr/wp-content/uploads/nestjs-logo.png',
  views: 1022,
  createdAt: '26.02.2022',
  userId: '1',
  type: [
    'IT',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
  ],
  user: {
    id: '1',
    username: 'admin',
    password: '123',
    roles: [
      'ADMIN',
    ],
    avatar: 'https://images.immediate.co.uk/production/volatile/sites/3/2022/04/Screenshot-2022-05-10-at-11.13.42-b2ecc46-e1663927354655.png',
  },
};

export default {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAT&_order=asc&q=`,
      method: 'GET',
      status: 200,
      response:
         [
           { ...data, id: '1' },
           { ...data, id: '2' },
           { ...data, id: '3' },
         ],
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.decorators = [StoreDecorator({})];
Dark.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAT&_order=asc&q=`,
      method: 'GET',
      status: 200,
      response:
         [
           { ...data, id: '1' },
           { ...data, id: '2' },
           { ...data, id: '3' },
         ]
    },
  ]
};
