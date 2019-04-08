<template>
    <div>
        <h1>Event Publisher</h1>
        <button @click="sendEvent1">Send Event1</button>
        <button @click="sendEvent2">Send Event2</button>
    </div>
</template>
<script>
import EventBus1 from '@/event-bus1.js'
export default {
  methods: {
    sendEvent1 () {
      EventBus1.$emit('event1', 'I am the message send from eventbus1')
    },
    sendEvent2 () {
      this.$bus.$emit('event2', 'I am the message send from eventbus2')
    }
  }
}
</script>
