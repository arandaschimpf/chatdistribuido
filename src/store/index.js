import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {auth} from './fire'

const store = new Vuex.Store({
  state: {
    user: undefined
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    initFirebase ({commit}) {
      auth.onAuthStateChanged(user => {
        commit('setUser', user)
      })
    }
  }
})

export default store
