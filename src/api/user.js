import fetch from '../config/fetch'

export default {
  getUserList () {
    return fetch('GET', '/user/userList')
  },
  signIn (params) { // 用户登录
    return fetch('POST', '/user/login', params)
  }
}
