**Read in other languages: [Русский](README.md), [Polska](README.pl.md).**

# React homework template

Этот проект был создан при помощи [Vite](https://vitejs.dev). Для знакомства и
настройки дополнительных возможностей
[обратись к документации](https://vitejs.dev/guide/).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируй этот репозиторий.
3. Измени имя папки с `react-homework-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи базовые зависимости проекта командой `npm install`.
7. Запусти режим разработки, выполнив команду `npm start dev`.
8. Перейди в браузере по адресу [http://localhost:5173](http://localhost:5173)
   или [http://127.0.0.1:5173](http://127.0.0.1:5173). Эта страница будет
   автоматически перезагружаться после сохранения изменений в файлах проекта.

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и
деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда обновляется
ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого
необходимо в файле `package.json` отредактировать поле `homepage`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Добавить запись в файле vite.config.json строку `base: '/your_repo_name/'`,

```js
export default defineConfig({
  plugins: [react()],
  base: '/your_repo_name/',
});
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](src/assets/readme-images/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](src/assets/readme-images//status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

### Маршрутизация

Если приложение использует библиотеку `react-router-dom-v6` для маршрутизации,
необходимо дополнительно настроить компонент `<RouterProvider>`, передав в пропе
`router` объект соответствующий объект, созданный при помощи `createHashRouter`,
т.к. GitHub не потдерживает `BrowserRouter`.

```jsx
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/other-path',
    element: <OtherComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## Как это работает

![How it works](src/assets/readme-images//how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит линтинг и сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.

## ENV Переменные

В файле `.env` создаем переменную с префиксом `VITE_REACT_APP_variable_name`
после чего, в компоненте можно получить это значение при помощи
`import.meta.env.variable_name`.

Пример:

```shell
.env file

VITE_REACT_APP_EXAMPLE=env_example

```

```jsx
component file

import.meta.env.VITE_REACT_APP_EXAMPLE;
```
