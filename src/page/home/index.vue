<template>
  <div class="home-container">
    <header-home />
    <div id="scroll_wrapper" class="scroll-wrapper">
      <div class="content">
        <open-app />
        <mt-swipe :auto="4000" class="home-swipe">
          <mt-swipe-item v-for="ads in adsList" :key="ads.id">
            <img :src="ads.url" :alt="ads.name" />
          </mt-swipe-item>
        </mt-swipe>
        <div class="home-menu">
          <div class="menu-item" v-for="menu in menuList" :key="menu.type">
            <div class="item-img" :style="{background: 'url('+ menu.url +') no-repeat center center', backgroundSize: 'cover'}"></div>
            <div class="item-title">{{menu.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <footer-tabbar :current='"home"' />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { Swipe, SwipeItem } from 'mint-ui'
import BScroll from 'better-scroll'
import headerHome from '../../components/header/headerHome'
import openApp from '../../components/common/openApp'
import footerTabbar from '../../components/footer/footerTabbar'
const homeModule = createNamespacedHelpers('home')
export default {
  components: {
    mtSwipe: Swipe,
    mtSwipeItem: SwipeItem,
    headerHome,
    openApp,
    footerTabbar
  },
  computed: {
    ...homeModule.mapGetters([
      'adsList',
      'menuList'
    ])
  },
  mounted () {
    /* eslint-disable no-new */
    new BScroll('#scroll_wrapper', {
      deceleration: 0.001,
      bounce: true,
      swipeTime: 1800,
      click: true
    })
    this.initData()
  },
  methods: {
    ...homeModule.mapActions([
      'getAdsList',
      'getMenuList'
    ]),
    // 初始化数据
    async initData () {
      await this.getAdsList()
      await this.getMenuList()
    }
  }
}
</script>

<style lang="less" scoped>
  .scroll-wrapper {
    position: relative;
    margin-top: .95rem;
    background-color: #eee;
    height: 100%;
    .home-swipe {
      height: 100px;
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .home-menu {
      display: flex;
      flex-wrap: wrap;
      padding: 0 .2rem .2rem .2rem;
      background-color: #fff;
      .menu-item {
        width: 20%;
        text-align: center;
        margin-top: .2rem;
        .item-img {
          box-sizing: border-box;
          height: 1rem;
          &.img1 {
            background: url(http://sosout.com/static/images/tb/tm.png) no-repeat center center;
            background-size: cover;
          }
          &.img2 {
            background: url(http://sosout.com/static/images/tb/jhs.png) no-repeat center center;
            background-size: cover;
          }
          &.img3 {
            background: url(http://sosout.com/static/images/tb/tmgj.png) no-repeat center center;
            background-size: cover;
          }
          &.img4 {
            background: url(http://sosout.com/static/images/tb/wm.png) no-repeat center center;
            background-size: cover;
          }
          &.img5 {
            background: url(http://sosout.com/static/images/tb/tmcs.png) no-repeat center center;
            background-size: cover;
          }
          &.img6 {
            background: url(http://sosout.com/static/images/tb/czzx.png) no-repeat center center;
            background-size: cover;
          }
          &.img7 {
            background: url(http://sosout.com/static/images/tb/fzlx.png) no-repeat center center;
            background-size: cover;
          }
          &.img8 {
            background: url(http://sosout.com/static/images/tb/ljb.png) no-repeat center center;
            background-size: cover;
          }
          &.img9 {
            background: url(http://sosout.com/static/images/tb/pm.png) no-repeat center center;
            background-size: cover;
          }
          &.img10 {
            background: url(http://sosout.com/static/images/tb/fl.png) no-repeat center center;
            background-size: cover;
          }
        }
        .item-title {
          color: #666;
          font-size: .3rem;
          margin-top: .1rem;
        }
      }
    }
  }
</style>


