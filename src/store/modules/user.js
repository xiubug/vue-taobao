import user from '../../api/user'
import * as types from '../mutation-types'

// 初始化 state
const state = {
  isLogin: false,
  userListState: ''
}

// getters
const getters = {
  isLogin: state => state.isLogin,
  userListGetters: state => state.userListState
}

// actions
const actions = {
  async getUserList ({ commit }) {
    let res = await user.getUserList()
    commit(types.GET_USERLIST, res)
  },
  async goLogin ({ commit }, params) {
    let res = await user.signIn(params)
    commit(types.SIGN_IN, res)
  }
}

// mutations
const mutations = {
  [types.GET_USERLIST] (state, userList) {
    state.userListState = userList
  },
  [types.SIGN_IN] (state, user) {
    if (user && user.length) {
      state.isLogin = true
    } else {
      state.isLogin = false
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
