<template>
  <div>
    <h1>привет сучка!!!</h1>
    <h2>привет сучка!</h2>
    <h3>привет сучка!</h3>
    <h4>привет сучка!</h4>
    <p>привет сучка!</p>
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    dfdfd () {
    }
  }
}
</script>
