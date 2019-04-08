<template>
   <button @click="handleClick" :style="styles">
       <slot></slot>
   </button>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '#FF0000'
    }
  },
  computed: {
    styles () {
      return {
        background: this.color
      }
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
