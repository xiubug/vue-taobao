import fetch from '../config/fetch'

export default {
  getAdsList () {
    return fetch('GET', '/ads/list')
  }
}
