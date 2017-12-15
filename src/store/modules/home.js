import home from '../../api/home'
import * as types from '../mutation-types'

// 初始化 state
const state = {
  adsList: ''
}

// getters
const getters = {
  adsList: state => state.adsList
}

// actions
const actions = {
  async getAdsList ({ commit }) {
    let res = await home.getAdsList()
    commit(types.GET_ADSLIST, res)
  }
}

// mutations
const mutations = {
  [types.GET_ADSLIST] (state, adsList) {
    state.adsList = adsList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
