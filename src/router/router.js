import App from '../App'

// 首页
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
  path: '/',
  component: App, // 顶层路由，对应index.html
  children: [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: home
  }]
}]
