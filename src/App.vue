<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Title</h1>
      <h2>Счетчик {{$store.state.counter}}</h2>
      <button class="btn primary" @click="$store.state.counter++">Добавить</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'

export default {
  components: { TheNavbar }
}
</script>
