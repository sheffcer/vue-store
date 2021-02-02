<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Title</h1>
      <h2>Счетчик {{counter}}</h2>
      <button class="btn primary" @click="add">Добавить</button>
      <button class="btn danger" @click="addAsync">Добавить</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
import { mapGetters } from 'vuex'

export default {
  components: { TheNavbar },
  computed: {
    ...mapGetters(['counter'])
  },
  methods: {
    increment () {
      return this.$store.commit('increment')
    },
    add () {
      // this.$store.commit('add', {
      //   value: 1
      // })
      this.$store.commit({
        type: 'add',
        value: 1
      })
    },
    addAsync () {
      this.$store.dispatch('addAsync')
    }
  }
}
</script>
