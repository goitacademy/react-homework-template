**Read in other languages: [rosyjski](README.md), [polski](README.pl.md).**

# React homework template

Ten projekt został stworzony przy pomocy
[Create React App](https://github.com/facebook/create-react-app). W celu
zapoznania się z ustawieniami dodatkowych opcji
[zobacz dokumentację](https://facebook.github.io/create-react-app/docs/getting-started).

## Utworzenie repozytorium zgodnie z szablonem

Wykorzystaj to repozytorium organizacji GoIT jako szablon do utworzenia repozytorium własnego projektu. W tym celu kliknij na przycisk `"Use this template"` i wybierz opcję `"Create a new repository"`, jak pokazano na rysunku.

![Creating repo from a template step 1](./assets/template-step-1.png)

W następnym kroku otworzy się strona utworzenia nowego repozytorium. Wypełnij pole nazwy i upewnij się, że repozytorium jest publiczne, a następnie kliknij na przycisk `"Create repository from template"`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Teraz masz własne repozytorium projektu, ze strukturą folderów i plików jak w szablonie. Pracuj z nim jak z innymi repozytoriami, klonuj je na swój komputer, pisz kod, rób commity i wysyłaj na GitHub.

## Przygotowanie do pracy

1. Upewnij się, że na komputerze zainstalowana jest wersja LTS Node.js.
   [Ściągnij i zainstaluj](https://nodejs.org/en/), jeżeli trzeba.
2. Utwórz bazowe zależności projektu przy pomocy polecenia `npm install`.
3. Włącz tryb pracy, wykonując polecenie `npm start`.
4. Przejdź w przeglądarce pod adres
   [http://localhost:3000](http://localhost:3000). Ta strona będzie
   automatycznie przeładowywać się po zapisaniu zmian w plikach projektu.

## Deployment

Produkcyjna wersja projektu będzie automatycznie poddana pracy lintera, budowana
i deployowana na GitHub Pages, w gałęzi `gh-pages` za każdym razem, gdy
aktualizuje się gałąź `main`, na przykład po bezpośrednim pushu lub przyjętym
pull requeście. W tym celu należy w pliku `package.json` zredagować pole
`homepage`, zamieniając `your_username` i `your_repo_name` na swoje nazwy i
wysłać zmiany do GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/"
```

Następnie należy przejść do ustawień repozytorium GitHub (`Settings` > `Pages`)
i wydystrybuować wersję produkcyjną plików z folderu `/root` gałęzi `gh-pages`,
jeśli nie zostało to wykonane automatycznie.

![GitHub Pages settings](./assets/repo-settings.png)

### Status deploymentu

Status deploymentu ostatniego commitu wyświetla się jako ikona obok jego
identyfikatora.

- **Żółty kolor** - wykonuje się zbudowanie i deployment projektu.
- **Zielony kolor** - deploymnt zakończył się sukcesem.
- **Czerwony kolor** - podczas pracy lintera, budowania lub deploymentu wystąpił
  błąd.

Bardziej szczegółowe informacje o statusie można zobaczyć po kliknięciu na
ikonkę i przejściu w wyskakującym oknie do odnośnika `Details`.

![Deployment status](./assets/deploy-status.png)

### Deployowana strona

Po jakimś czasie, zazwyczaj kilku minut, zdeployowaną stronę będzie można
zobaczyć pod adresem wskazanym w zredagowanej właściwości `homepage`. Tutaj na
przykład znajduje się odnośnik do zdeployowanej strony w wersji dla tego
repozytorium
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Jeżeli otwiera się pusta strona, upewnij się, że w zakładce `Console` nie ma
błędów związanych z nieprawidłowymi ścieżkami do plików CSS i JS projektu
(**404**). Najprawdopodobniej wprowadzona została niewłaściwa wartość
właściwości `homepage` w pliku `package.json`.

### Trasowanie

Jeżeli aplikacja wykorzystuje bibliotekę `react-router-dom` dla trasowania,
należy uzupełniająco skonfigurować komponent `<BrowserRouter>`, przekazując w
propsie `basename` dokładną nazwę twojego repozytorium. Slash na początku i na
końcu łańcucha jest obowiązkowy.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```

## Jak to działa

![How it works](./assets/how-it-works.png)

1. Po każdym pushu do gałęzi `main` repozytorium GitHub, uruchamia się specjalny
   skrypt (GitHub Action) z pliku `.github/workflows/deploy.yml`.
2. Wszystkie pliki repozytorium kopiują się na serwer, gdzie projekt zostaje
   zainicjowany i przechodzi pracę lintera oraz zbudowanie przed deploymentem.
3. Jeżeli wszystkie kroki zakończyły się sukcesem, zbudowana wersja produkcyjna
   plików projektu wysyłana jest do gałęzi `gh-pages`. W przeciwnym razie, w
   logu wykonania skryptu zostanie wskazane z czym jest problem.
