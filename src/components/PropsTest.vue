<template>
  <div>
      <p>PropsTest</p>
      {{title}}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>
