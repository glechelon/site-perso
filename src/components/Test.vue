<template>
<div class="test">
<h1>{{message}}</h1>
<button v-on:click="click();"> alert </button>
<p v-if="show"> You can see me now. </p>
<p>{{list}} </p>
<p> {{reversedList}} </p>
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
  },

  computed: {
    reversedList: function () {
      return this.list.slice().reverse()
    }
  }

}
</script>
h1 {

  color : red;
}
<style scoped>

</style>
