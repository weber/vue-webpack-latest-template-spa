import Vue from 'vue'
import router from './router'
import App from './App'
// import { store } from './store'
// import Ramda from './vendor/ramda-proxy'
// import EventBus from './utils/eventBus'

// import './styles/app.styl'
import '@/styles/app.scss'

// Vue.use(EventBus)
// Vue.use(Ramda)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
