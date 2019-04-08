<template>
  <div>
    <h1>Promise Test</h1>
    <button @click="getRandomNr">random Number</button>
    {{msg}}
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      msg: ''
    }
  },
  methods: {
    getRandomNr () {
      const p = new Promise((resolve, reject) => {
        setTimeout(() => {
          let nr = Math.random()
          if (nr > 0.5) {
            resolve(nr)
          } else {
            reject(nr)
          }
        }, 2000)
      })

      p.then(val => { this.msg = 'bigger than 0.5'; console.log('big') }).catch(val => { this.msg = 'smaller than 0.5'; console.log('small') })
    }
  }
}
</script>
