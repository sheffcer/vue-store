<template>
  <header class="navbar">
    <strong>Счетчик {{ counter }}  ({{doubleCounter}})</strong>

    <button class="btn" @click="addFive">Добавить</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    // counter () {
    //   return this.$store.getters.counter
    // },
    ...mapGetters(['counter']),
    ...mapGetters(['doubleCounter'])
  },
  methods: {
    ...mapMutations(['add']),
    addFive () {
      this.add({ value: 5 })
      // this.$store.commit('add', {
      //   value: 5
      // })
    }
  }
}
</script>
