# Ranking Board

A ranking board for team internal use. Anyone can publish their problems in this repository and the one who solves the problem can earn points. This site will automatically deploy to the [GitHub Pages](https://crispy-adventure-08dfcea9.pages.github.io) when there're any commit to the `main` branch.

## Dev

To start the dev server:

```
npm run start
```

It will open http://localhost:3000/ automatically in your default browser .

## Build

```
npm run build
```

## Test

```
npm run test
```

## Deploy

Deploy this application to the GitHub Pages by:

```
npm run deploy
```

We wrap a custom deploy script inside which is `srcripts/deploy_artifacts.js`.
