# vue-webpack-latest-template-spa
VueJs template using Webpack 4

```js
// first-in-class development experience
$ npm run dev

// Production ready build
$ npm run prod

// Run static server(production build)
$ npm run server

// Unit tests run - jest
$ npm run unit

// End-to-end tests with Nightwatch
$ npm run e2e

// Unit tests run, end-to-end tests run 
$ npm run test
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

- webpack 4.7.0
- vue 2.5.16
- vue-router
- vuex
- uglifyjs 3
- eslint
- jest
- nightwatch
- sass
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