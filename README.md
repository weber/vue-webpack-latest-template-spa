# vue-webpack-latest-template-spa
VueJs template using Webpack 4

```js
// first-in-class development experience
$ npm run dev

// Production ready build
$ npm run prod

// Run static server(production build)
$ npm run server

// TESTING
// Unit tests run - jest
$ npm run unit

// End-to-end tests with Codeceptjs(https://codecept.io/), 
// Puppeteer(https://github.com/GoogleChrome/puppeteer)
// (https://codecept.io/puppeteer/)

$ npm run e2e
// 
$ npm run e2e:gen

// Unit tests run, end-to-end tests run
$ npm run test

// SECURITY
// security checking(https://snyk.io/)
$ npm run check:snyk
$ npm run check:snyk-monitor
$ npm run snyk-wizard

// security checking
$ npm run check-security

```

## Path aliases

@ - /src

@static - /src/static

@img - /src/static/img

@pages - /src/components/pages

@components - /src/components

@utils - /src/utils

@dl - /src/components/dl

@layouts - /src/components/layouts

@panels - /src/components/panels

@controlls - /src/components/controlls

```js
import '@/styles/app.scss'
...
```
```html
<img src="@img/logo.png" >
...
```

## Setting your app(meta)

app-settings.json

```json
"name": "My name app",
"short_name": "My short name app",
"description": "My awesome Progressive Web App!",
"background_app": "#ffffff",
"favicon": "src/static/img/logo.png"
```

##

- Pre-push hooks
- security checking

## 

- webpack 4.7.0
- vue 2.5.16
- vue-router
- vuex
- uglifyjs 3
- eslint
- jest
- puppeteer
- scss
- stylus
- less
- imagemin(gifsicle, mozjpeg, optipng, pngquant, svgo, webp)
- ramda
- csso

## Browserslist
```
// only hardcore
"last 2 firefox version",
"last 2 chrome version",
"last 1 safari version",
"not ie <= 11",
"not op_mini all"
```