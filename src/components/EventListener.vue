<template>
  <div>
      <h1>Event Listener</h1>
      {{messageFromEventBus1}}
      {{messageFromEventBus2}}
  </div>
</template>
<script>
import EventBus1 from '@/event-bus1.js'
export default {
  data () {
    return {
      messageFromEventBus1: '',
      messageFromEventBus2: ''
    }
  },
  mounted () {
    EventBus1.$on('event1', (msg) => {
      this.messageFromEventBus1 = msg
    })
    this.$bus.$on('event2', (msg) => {
      this.messageFromEventBus2 = msg
    })
  }
}
</script>
