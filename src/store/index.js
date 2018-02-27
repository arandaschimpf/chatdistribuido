import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {auth, authenticate, db} from './fire'

let listeners = {
  users: db.ref('users'),
  messages: db.ref('messages/general')
}

const store = new Vuex.Store({
  state: {
    user: undefined,
    users: {},
    messages: {}
  },
  mutations: {
    'set-user' (state, user) {
      state.user = user ? {
        name: user.displayName,
        email: user.email,
        id: user.uid,
        photo: user.photoURL
      } : undefined
    },
    'sync' (state, newState) {
      Object.assign(state, newState)
    }
  },
  actions: {
    initFirebase ({commit, dispatch}) {
      auth.onAuthStateChanged(user => {
        commit('set-user', user)
        if (user) {
          db.ref('users').child(user.uid).set({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          })
          dispatch('sync', 'users')
          dispatch('sync', 'messages')
        } else {
          dispatch('desync', 'users')
          dispatch('desync', 'messages')
        }
      })
    },
    async login () {
      await authenticate()
    },
    async logout () {
      await auth.signOut()
    },
    sync ({commit}, type) {
      listeners[type].on('value', snap => {
        commit(`sync`, {[type]: snap.val()})
      })
    },
    desync ({commit}, type) {
      listeners[type].off()
    },
    sendMessage ({state}, message) {
      const uid = state.user.id
      const datetime = Date.now()
      listeners.messages.push({uid, datetime, message})
    }
  }
})

export default store
