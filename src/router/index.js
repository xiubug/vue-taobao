import App from '../App'

// 首页
const home = r => require.ensure([], () => r(require('../page/home/index')), 'home')

// 物流
const logistics = r => require.ensure([], () => r(require('../page/logistics/index')), 'logistics')

// 购物车
const cart = r => require.ensure([], () => r(require('../page/cart/index')), 'cart')

// 我的
const profile = r => require.ensure([], () => r(require('../page/profile/index')), 'profile')

// 登录界面
const login = r => require.ensure([], () => r(require('../page/user/login')), 'login')

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [{
    path: '/home', // 首页
    component: home
  }, {
    path: '/logistics', // 物流
    component: logistics,
    meta: {
      login: true
    }
  }, {
    path: '/cart', // 购物车
    component: cart,
    meta: {
      login: true
    }
  }, {
    path: '/profile', // 我的
    component: profile
  }, {
    path: '/login', // 登录界面
    component: login
  }, {
    path: '*',
    redirect: '/home'
  }]
}]
