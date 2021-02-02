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
    },
    add (state, payload) {
      state.counter += payload.value
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        console.log(context)
        context.commit({
          type: 'add',
          value: 10
        })
      }, 500)
    }
  },
  getters: {
    counter (state) {
      return state.counter
    },
    doubleCounter (_, getters) {
      return getters.counter * 2
    }
  }
})
