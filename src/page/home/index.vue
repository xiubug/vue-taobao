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
  }
</style>


