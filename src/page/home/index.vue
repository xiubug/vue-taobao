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
          <div class="home-headline" flex="">
            <div flex-box="0" class="headline-img"></div>
            <div flex-box="1" class="headline-content" flex="dir:left">
              <span class="title">手机</span><span class="text">网友晒出自家猫照片，请问你家缺保姆吗</span>
            </div>
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
      padding: 0 .2rem;
      background-color: #fff;
      .menu-item {
        width: 20%;
        text-align: center;
        margin-top: .2rem;
        .item-img {
          box-sizing: border-box;
          height: 1rem;
        }
        .item-title {
          color: #666;
          font-size: .3rem;
          margin-top: .1rem;
        }
      }
    }
    .home-headline {
      margin-top: .2rem;
      padding: .1rem 0;
      margin-left: -.2rem;
      background-color: #fff;
      overflow: hidden;
      .headline-img {
        width: 2.07rem;
        height: .6rem;
        background: url(http://sosout.com/static/images/tb/headline.png) no-repeat center center;
        background-size: 80%;
      }
      .headline-content {
        font-size: .36rem;
        flex-wrap: nowrap;
        .title {
          display: inline-block;
          white-space: nowrap;
          border: 1px solid #D81421;
          color: #D81421;
          height: .4rem;
          border-radius: .1rem;
          font-size: .3rem;
          padding: 0 .05rem;
          margin: .1rem;
        }
        .text {
          display: inline-block;
          white-space: nowrap;
          height: .6rem;
          line-height: .6rem;
        }
      }
    }
  }
</style>


