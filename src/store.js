import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: {},
    userName: ''
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    },
    setUserName (state, name) {
      state.userName = name
    }
  },
  actions: {
    getPosition ({commit}, val) {
      commit('setPosition', val)
    }
  }
})
