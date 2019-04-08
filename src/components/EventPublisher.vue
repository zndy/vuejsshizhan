<template>
    <div>
        <h1>Event Publisher</h1>
        <button @click="sendEvent">Send Event</button>
    </div>
</template>
<script>
import EventBus1 from '@/event-bus1.js'
export default {
  methods: {
    sendEvent () {
      EventBus1.$emit('event1', 'I am the message send from EventPublisher')
    }
  }
}
</script>
