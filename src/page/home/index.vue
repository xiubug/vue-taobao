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
          <div class="menu-item">
            <div class="item-img img1"></div>
            <div class="item-title">天猫</div>
          </div>
          <div class="menu-item">
            <div class="item-img img2"></div>
            <div class="item-title">聚划算</div>
          </div>
          <div class="menu-item">
            <div class="item-img img3"></div>
            <div class="item-title">天猫国际</div>
          </div>
          <div class="menu-item">
            <div class="item-img img4"></div>
            <div class="item-title">外卖</div>
          </div>
          <div class="menu-item">
            <div class="item-img img5"></div>
            <div class="item-title">天猫超市</div>
          </div>
          <div class="menu-item">
            <div class="item-img img6"></div>
            <div class="item-title">充值中心</div>
          </div>
          <div class="menu-item">
            <div class="item-img img7"></div>
            <div class="item-title">飞猪旅行</div>
          </div>
          <div class="menu-item">
            <div class="item-img img8"></div>
            <div class="item-title">领金币</div>
          </div>
          <div class="menu-item">
            <div class="item-img img9"></div>
            <div class="item-title">拍卖</div>
          </div>
          <div class="menu-item">
            <div class="item-img img10"></div>
            <div class="item-title">分类</div>
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
      'adsList'
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
      'getAdsList'
    ]),
    // 初始化数据
    async initData () {
      await this.getAdsList()
      console.log(this.adsList)
    }
  }
}
</script>

<style lang="less" scoped>
  .scroll-wrapper {
    position: relative;
    margin-top: .95rem;
    .home-swipe {
      height: 100px;
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


