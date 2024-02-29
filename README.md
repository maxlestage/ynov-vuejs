# Seriously Web - Application de Rencontre

Seriously Web est une application web simple de rencontre développée avec Vue.js. Elle permet aux utilisateurs de se connecter, de rechercher des personnes, d'envoyer des messages et de découvrir des informations sur l'application.

## Installation

Pour installer et exécuter Seriously Web, vous aurez besoin de Node.js et npm (ou bunjs) installés sur votre machine.

### Cloner le dépôt

```bash
git clone git@github.com:maxlestage/ynov-vuejs.git
```

```bash
 cd seriously-web
```

### Installer les dépendances

```bash
npm install
```

ou

```bash
bun install
```

### Lancer l'application en mode développement

```bash
npm run dev
```

ou

```bash
bun run vite
```

L'application sera accessible à l'adresse `http://localhost:3000`.

## Routes

Seriously Web comprend les routes suivantes :

- `/` : Page d'accueil
- `/me` : Page de profil de l'utilisateur
- `/find` : Page de recherche de personnes
- `/chat` : Page de chat pour envoyer des messages
- `/about` : Page à propos de l'application

## Scripts

Voici quelques scripts utiles inclus dans `package.json` :

- `dev` : Lance l'application en mode développement avec Vite.
- `vite` : Utilise Bun pour exécuter Vite.
- `build` : Construit l'application pour la production.
- `preview` : Prévisualise l'application construite.
- `lint` : Exécute ESLint pour vérifier la qualité du code.
- `format` : Formate le code source avec Prettier.

### Tree

```tree
.
├── README.md
├── Tree.txt
├── bun.lockb
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── base.css
│   │   ├── logo.svg
│   │   └── main.css
│   ├── atoms
│   │   ├── Gallery.vue
│   │   ├── NavBar.vue
│   │   ├── PriceCard.vue
│   │   └── UserData.vue
│   ├── components
│   │   ├── Contact.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── Message.vue
│   │   └── Price.vue
│   ├── data
│   │   ├── data.json
│   │   └── user.json
│   ├── main.js
│   ├── router
│   │   └── index.js
│   ├── stores
│   │   └── counter.js
│   └── views
│       ├── AboutView.vue
│       ├── FindView.vue
│       ├── HomeView.vue
│       ├── MeView.vue
│       └── MessageView.vue
└── vite.config.js

10 directories, 32 files
```
