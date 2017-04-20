import Vue from 'vue'
import Vuex from 'vuex'

import State from './state'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: State,
  actions: Actions,
  mutations: Mutations
})

window.store = store

export default store
