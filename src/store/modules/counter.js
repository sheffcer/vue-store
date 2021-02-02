export default {
  namespased: true,
  state () {
    return {
      counter: 1
    }
  },
  mutations: {
    // increment (state) {
    //   state.counter++
    // },
    increment (state, payload) {
      state.counter += payload.value
    },
    add (state, payload) {
      state.counter += payload.value
    }
  },
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // console.log(context)
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
}
