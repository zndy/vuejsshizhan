<template>
  <div id="app">
    <MySlot>
      <template v-slot:named>
        <h1>named slot string</h1>
      </template>

      <template v-slot:default>
        <p>default slot String</p>
      </template>
    </MySlot>
  </div>
</template>
<script>

import MySlot from '@/components/SlotTest.vue'
export default {
  components: { MySlot }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
