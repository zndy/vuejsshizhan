<template>
  <div>
      <h1>Event Listener</h1>
      {{message}}
  </div>
</template>
<script>
import EventBus1 from '@/event-bus1.js'
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    EventBus1.$on('event1', (msg) => {
      this.message = msg
    })
  }
}
</script>
