import { createStore, createLogger } from 'vuex'
import counterModule from '@/store/modules/counter'

export default createStore({
  plugins: [createLogger()],
  modules: {
    count: counterModule
  }
})
