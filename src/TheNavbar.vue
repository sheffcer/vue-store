<template>
  <header class="navbar">
    <strong>Счетчик {{ $store.state.counter }}</strong>

    <button class="btn" @click="$store.state.counter++">Добавить</button>
  </header>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  }
}
</script>
