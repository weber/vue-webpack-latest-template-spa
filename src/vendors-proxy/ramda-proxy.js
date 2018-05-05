'use strict'
import * as R from 'ramda'

export default {
  install: (Vue) => {
    Object.defineProperty(Vue.prototype, '$R', {value: R})
  }
}
