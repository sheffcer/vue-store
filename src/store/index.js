import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      counter: 1
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})
