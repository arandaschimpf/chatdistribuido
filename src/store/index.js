import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {auth, authenticate} from './fire'

const store = new Vuex.Store({
  state: {
    user: undefined
  },
  mutations: {
    setUser (state, user) {
      state.user = user ? {
        name: user.displayName,
        email: user.email,
        id: user.uid,
        photo: user.photoURL
      } : undefined
    }
  },
  actions: {
    initFirebase ({commit}) {
      auth.onAuthStateChanged(user => {
        commit('setUser', user)
      })
    },
    async login () {
      await authenticate()
    },
    async logout () {
      await auth.signOut()
    }
  }
})

export default store
