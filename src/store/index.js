import {createStore} from 'vuex'
import {auth} from './auth.module'

export default createStore({
  state: {
    unit: 0,
    date: new Date(),
    stage4Date: 0,
    stage5Date: 0,
  },
  modules: {
    auth,
  },
  getters: {},
  mutations: {
    setDate(state, date) {
      state.date = date
    },
    setUnit(state, unit) {
      state.unit = unit
    },
    setStageDates(state, dates) {
      state.stage4Date = dates.stage4Date
      state.stage5Date = dates.stage5Date
    },
  },
})
