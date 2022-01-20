# react-homework-template

React course homework project template

## Скрытые файлы

Включите отображение скрытых файлов и папок в проводнике своей операционной
системы, иначе вы не сможете выбрать и скопировать служебные файлы настроек
проекта.

## Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app). You can learn
more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
In the project directory, you can run next set of predefined scripts.

## Перед началом работы

Один раз на проект установить все зависимости.

```shell
npm install
```

## Разработка

Запустить режим разработки.

```shell
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Деплой

Продакшен версия проекта будет автоматически собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например,
после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле
`package.json` отредактировать поле `homepage`, заменив `имя_пользователя` и
`имя_репозитория` на свои.

```json
"homepage": "https://имя_пользователя.github.io/имя_репозитория"
```

На всякий случай стоит зайти на GitHub в настройки репозитория (`Settings` >
`Pages`) и убедиться что продакшен версии файлов раздаются из папки `/root`
ветки `gh-pages`.

![GitHub Pages settings](./gh-pages-settings.png)

Через какое-то время живую страницу можно будет посмотреть по адресу указанному
в отредактированном свойстве `homepage`, например
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).
