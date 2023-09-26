# Model pentru un proiect React

Acest proiect a fost creat cu ajutorul
[Create React App](https://github.com/facebook/create-react-app). Pentru prezentări
și configurarea de funcții suplimentare
[consultă documentația](https://facebook.github.io/create-react-app/docs/getting-started).

## Crearea unui repository în baza modelului

Utilizează acest repository al organizației GoIT ca model pentru crearea unui repository
pentru proiectul tău. Pentru a face acest lucru, dă click pe "Use this template" și selectează opțiunea
`Create a new repository`, după cum se prezintă în imagine.

![Creating repo from a template step 1](./assets/template-step-1.png)

Următorul pas va deschide pagina de creare a unui nou repository. Completează câmpul
pentru numele acestuia, asigură-te că repository-ul este public, apoi dă click pe `Create repository from template`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Odată ce repository-ul a fost creat, trebuie să accesezi setările repository-ului creat în fila `Settings > Actions > General`, după cum se prezintă în imagine.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

După ce ai derulat până la sfârșitul paginii, în secțiunea `Workflow permissions`, selectează `Read and write permissions`, (Permisiuni de citire și scriere) și bifează caseta. Acest lucru
este necesar pentru a automatiza procesul de lansare a proiectului.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Avei acum un repository personal de proiecte, cu o structură de fișiere și foldere.

Lucrează apoi cu acesta așa cum ai face-o cu orice alt repository personal,
clonează-l pe computerul tău, scrie cod, confirmă-l și încarcă-l pe
GitHub.

## Pregătirea pentru muncă

1. Asigură-te că ai versiunea LTS a Node.js instalată pe computerul personal.
   [Descarcă și instalează](https://nodejs.org/en/) dacă este necesar.
2. Instalează dependențele de bază ale proiectului cu comanda `npm install`.
3. Pornește modul de dezvoltare utilizând comanda `npm start`.
4. Accesează [http://localhost:3000](http://localhost:3000) în browser-ul tău.
   Această pagină se va reîncărca automat după salvarea modificărilor în fișierele proiectului.

## Deploy

Versiunea de producție a proiectului va trece automat prin procesul de linting, va fi asamblată și implementată pe GitHub Pages, în ramura `gh-pages`, de fiecare dată când ramura `main` este actualizată. De exemplu, după un push direct sau o cerere de pull-request acceptată. 

Pentru a face acest lucru, trebuie să editeezi câmpul "homepage" din fișierul package.json, înlocuind "your_username" și "your_repo_name" cu detaliile tale, apoi să trimiți aceste modificări pe GitHub.

json
"homepage": "https://your_username.github.io/your_repo_name/"

În continuare, mergi la setările repository-ului GitHub (`Settings` > `Pages`) și setează distribuirea versiunii de producție a fișierelor în folderul `/root` al ramurii `gh-pages`, dacă acest lucru nu a fost făcut în mod automat.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment status

Starea de implementare a celui mai recent commit este afișat printr-o iconiță lângă ID-ului acestuia.

- **Galben** - proiectul este în curs de asamblare și de implementare.
- **Verde** - implementarea a fost finalizată cu succes.
- **Roșu** - a apărut o eroare în timpul procesului de linting, asamblării sau implementării.

Pentru a obține informații mai detaliate despre starea implementării, poți da click pe iconița corespunzătoare și apoi accesează link-ul "Details" din fereastra pop-up care se deschide.

![Deployment status](./assets/deploy-status.png)

### Pagina live

După un anumit interval de timp, de obicei câteva minute, poți vizualiza pagina live la adresa indicată în proprietatea "homepage" editată. De exemplu, iată un link către versiunea live pentru acest repository:
[https://goitacademy.github.io/react-homework-template](https://goitacademy.github.io/react-homework-template).

Dacă se deschide o pagină goală, asigură-te că în fila "Console" nu există erori legate de căi greșite către fișierele CSS și JS ale proiectului (**Eroare 404**). Cel mai probabil, valoarea proprietății "homepage" din fișierul package.json este incorectă.

### Rutarea

Dacă aplicația utilizează biblioteca react-router-dom pentru rutare,
trebuie să configurezi suplimentar componenta `<BrowserRouter>`, trecând în prop-ul "basename" numele exact al repository-ului tău. Bara oblică la începutul șirului este obligatorie.

jsx
<BrowserRouter basename="/your_repo_name">
  <App />
</BrowserRouter>


## Cum funcționează

![How it works](./assets/how-it-works.png)

1. După fiecare "push" în ramura `main` a repository-ului GitHub, se va crea un fișier special script (GitHub Action) din fișierul `.github/workflows/deploy.yml`.
2. Toate fișierele din repository sunt copiate pe server, unde proiectul este inițializat, este efectuat linting-ul și asamblarea înainte de implementare.
3. Dacă toți pașii sunt finalizați cu succes, versiunea asamblată în producție a fișierelor proiectului este trimisă în ramura `gh-pages`. În caz contrar, în jurnalul (log) de execuție al scriptului vor fi indicate problemele întâlnite.
