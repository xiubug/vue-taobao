import fetch from '../config/fetch'

export default {
  getUserList () {
    return fetch('GET', '/user/userList')
  }
}
