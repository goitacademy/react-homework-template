**Read in other languages: [Rosyjski](README.md), [Polska](README.pl.md).**

# React homework template

Ten projekt został stowrzony przy pomocy [Create React App](https://github.com/facebook/create-react-app). W celu zapoznania się z ustawieniami dodatkowych opcji [zobacz dokumentację](https://facebook.github.io/create-react-app/docs/getting-started).

## Przygotownie nowego projektu

1. Upewnij się, że na komputerze zainstalowana jest wersja LTS Node.js. [Ściągnij i zainstaluj](https://nodejs.org/en/), jeżeli trzeba. 
2. Sklounj to repozytorium.
3. Zmień nazwę folderu z `react-homework-template` na nazwę swojego projektu.
4. Utwórz nowe, puste repozytorium na GitHub.
5. Otwórz projekt w VSCode, włącz terminal i połącz projekt z repozytorium GitHub [zgodnie z instrukcją](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url)   
6. Utwórz bazowe zależności projektu przy pomocy polecenia `npm install`.

8. Запусти режим разработки, выполнив команду `npm start`.
Włącz tryb pracy, wykonując polecenie `npm start`.

10. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.
   
   Przejdź w przeglądarce pod adres [http://localhost:3000](http://localhost:3000). Ta strona będzie automatycznie przeładowywać się po zapisaniu zmian w plikach projektu.

## Деплой Deploy

Продакшн версия проекта будет автоматически проходить линтинг, собираться и
деплоиться на GitHub Pages, в ветку `gh-pages`, каждый раз когда обновляется
ветка `main`. Например, после прямого пуша или принятого пул-реквеста. Для этого
необходимо в файле `package.json` отредактировать поле `homepage`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

Produkcyjna wersja projektu będzie automatycznie przechodzić linting, zbierać się i deployować na GitHub Pages, w gałęzi `gh-pages` za każdym razem, gdy aktualizuje się gałąź `main`. Na przykład po bezpośrednim pushu lub przyjętym pull requeście. W tym celu należy w pliku `package.json` zredagować pole `homepage`, zamieniając `your_username` i `your_repo_name` na swoje i wysłać zmiany na GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

Następnie należy przejść do ustawień repozytorium GitHub (`Settings` > `Pages`) i wystawić dystrybucję wersji produkcyjnej plików z folderu `/root` gałęzi `gh-pages`, jeśli nie zostało to wykonane autoamtycznie.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя Status deploya

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.
Status deploya ostatniego commitu wyświetla się poprzez ikonę obok jego identyfikatora.

- **Желтый цвет** Żółty kolor - выполняется сборка и деплой проекта. wykonuje się zebranie i deploy projektu.
- **Зеленый цвет** Zielony kolor - деплой завершился успешно. deploy zakończył sie sukcesem.
- **Красный цвет** Czerwony kolor - во время линтинга, сборки или деплоя произошла ошибка. w czasie lintingu, zebrania lub deploya zaszedł błąd.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

Bardziej szczegółowe informacje o statusie można zobaczyć, kliknąwszy na ikonkę i w wyskakującym oknie przejść po odnośniku `Details`.

![Deployment status](./assets/status.png)

### Живая страница Żywa strona

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Za jakiś czas, zazwyczaj kilka minut, żywą stronę będzie można zobaczyć pod adresem wskazanym w zredagowanej właściwości `homepage`. Na przykład, oto odnośnik do żywej strony w wersji dla tego repozytorium [https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` в файле `package.json`.

Jeżeli otwiera się pusta strona, upewnij się, że w zakładce `Console` nie ma błędów związanych z nieprawidłowymi ścieżkami do CSS i JS plików projektu (**404**). Naprawdopodobniej wprowadzona została niewłaściwa wartość właściwości `homepage` w pliku `package.json`.

### Маршрутизация Trasowanie

Если приложение использует библиотеку `react-router-dom` для маршрутизации,
необходимо дополнительно настроить компонент `<BrowserRouter>`, передав в пропе
`basename` точное название твоего репозитория. Слеши в начале и конце строки
обязательны.

Jeżeli aplikacja wykorzystuje bibliotekę `react-router-dom` dla trasowania, należy uzupełniająco skonfigurować komponent `<BrowserRouter>`, przekazując w propsie `basename` dokładną nazwę twojego repozytorium. Slashe na początku i końcu łańcucha są obowiązkowe.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

## Как это работает Jak to działa

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
   Po każdym pushu do gałęzi `main` repozytorium GitHub, uruchamia się specjalny skrypt (GitHub Action) z pliku `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит линтинг и сборку перед деплоем.
   Wszystkie pliki repozytorium kopiują się na serwer, gdzie projekt zostaje zainicjowany i przechodzi linting oraz zebranie przed deployem.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.
   Jeżeli wszystkie kroki zakończyły się sukcesem, zebrana wersja produkcyjna plików projektu wysyłana jest do gałęzi `gh-pages`. W przeciwnym razie, w logu wykonania skryptu zostanie wskazane, w czym problem.
