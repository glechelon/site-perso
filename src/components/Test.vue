<template>
<div class="test">
<h1>{{message}}</h1>
<button v-on:click="click();"> alert </button>
<p v-if="show"> You can see me now. </p>
<ul v-for="n in list">
  <li>{{n}}</li>
</ul>
</div>

</template>

<script>
module.exports = {
  data: function () {
    return {
      message: 'hello',
      show: false,
      list: [1, 2, 3]
    }
  },
  methods: {
    click: function () {
      alert('coucou')
      this.show = !(this.show)
    }

  }

}
</script>

<style scoped>

</style>
