<template>
  <div id="app">
    <MySlot>
      <div slot="named">
        <h1>named slot string</h1>
      </div>
      <div slot>
        <p>default slot String</p>
      </div>
    </MySlot>

    <MyProps title="I'm Props Title"></MyProps>

    <MyBtn color="#00FF00" @click="handleClick">Click Me</MyBtn>

    <MyPromise></MyPromise>

    <EventPublisher></EventPublisher>
    <EventListener></EventListener>
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <button @click="gotoUserPage">goto user page</button>
    <router-view/>
  </div>
</template>
<script>
import MySlot from '@/components/SlotTest.vue'
import MyProps from '@/components/PropsTest.vue'
import MyBtn from '@/components/MyButton.vue'
import EventPublisher from '@/components/EventPublisher.vue'
import EventListener from '@/components/EventListener.vue'
import MyPromise from '@/components/PromiseTest.vue'
export default {
  components: { MySlot, MyProps, MyBtn, EventPublisher, EventListener, MyPromise },
  methods: {
    handleClick (e) {
      console.log(e)
    },
    gotoUserPage () {
      this.$router.push('/user/123')
    }
  }
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
