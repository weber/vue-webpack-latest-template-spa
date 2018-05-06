'use strict'
import Vue from 'vue'
const EventBus = new Vue()
/**
 * You can now trigger events in your components :
 * ```
 * export default {
  name: 'my-component',
  methods: {
    triggerMyEvent () {
      this.$bus.$emit('my-event', { ... pass some event data ... })
    }
  }
}
// Or directly in your HTML template
<div>
  <button @click="$bus.$emit('my-event')">Click to trigger event</button>
</div>
 * ```
 *
 * Listen to events
 *
 * Events can be listened to in any component.
```
export default {
  name: 'my-component',
  created () {
    this.$bus.$on('my-event', ($event) => {
      console.log('My event has been triggered', $event)
    })
  }
}

// Including the event bus component itself

const EventBus = new Vue({
  created () {
    this.$on('my-event', this.handleMyEvent)
  },
  methods: {
    handleMyEvent ($event) {
      console.log('My event caught in global event bus', $event)
    }
  }
})
```
 */

export default {
  install: (Vue) => {
    Object.defineProperties(Vue.prototype, {
      $bus: {
        get: function () {
          return EventBus
        }
      }
    })
  }
}
