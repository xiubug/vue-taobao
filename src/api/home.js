import fetch from '../config/fetch'

const menuList = [{
  type: 'tm',
  url: 'http://sosout.com/static/images/tb/tm.png',
  name: '天猫'
}, {
  type: 'jhs',
  url: 'http://sosout.com/static/images/tb/jhs.png',
  name: '聚划算'
}, {
  type: 'tmgj',
  url: 'http://sosout.com/static/images/tb/tmgj.png',
  name: '天猫国际'
}, {
  type: 'wm',
  url: 'http://sosout.com/static/images/tb/wm.png',
  name: '外卖'
}, {
  type: 'tmcs',
  url: 'http://sosout.com/static/images/tb/tmcs.png',
  name: '天猫超市'
}, {
  type: 'czzx',
  url: 'http://sosout.com/static/images/tb/czzx.png',
  name: '充值中心'
}, {
  type: 'fzlx',
  url: 'http://sosout.com/static/images/tb/fzlx.png',
  name: '飞猪旅行'
}, {
  type: 'ljb',
  url: 'http://sosout.com/static/images/tb/ljb.png',
  name: '领金币'
}, {
  type: 'pm',
  url: 'http://sosout.com/static/images/tb/pm.png',
  name: '拍卖'
}, {
  type: 'fl',
  url: 'http://sosout.com/static/images/tb/fl.png',
  name: '分类'
}]

export default {
  getAdsList () {
    return fetch('GET', '/ads/list')
  },
  getMenuList () {
    return menuList
  }
}
