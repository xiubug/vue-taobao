import user from '../../api/user'
import * as types from '../mutation-types'

// 初始化 state
const state = {
  userListState: ''
}

// getters
const getters = {
  userListGetters: state => state.userListState
}

// actions
const actions = {
  async getUserList ({ commit }) {
    let res = await user.getUserList()
    commit(types.GET_USERLIST, res)
  }
}

// mutations
const mutations = {
  [types.GET_USERLIST] (state, userList) {
    state.userListState = userList
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
