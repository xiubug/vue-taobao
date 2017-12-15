export default {
  routerMode: 'history',
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://admin.sosout.com' : (process.env.NODE_ENV === 'production' ? 'http://admin.sosout.com' : null),
  cookie: 'VUE_TAOBAO',
  route: {
    login: '/login'
  }
}
