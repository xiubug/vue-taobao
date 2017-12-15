<template>
    <mt-tabbar v-model="selected" class="footer-tabbar" fixed>
        <mt-tab-item id="home" @click.native="jumpPage({path: '/home'})">
            <i slot="icon" class="iconfont">&#xe7d4;</i>
            首页
        </mt-tab-item>
        <mt-tab-item id="logistics" @click.native="jumpPage({path: '/logistics'})">
            <i slot="icon" class="iconfont">&#xe6b0;</i>
            物流
        </mt-tab-item>
        <mt-tab-item id="cart" @click.native="jumpPage({path: '/cart'})">
            <i slot="icon" class="iconfont">&#xe670;</i>
            购物车
        </mt-tab-item>
        <mt-tab-item id="profile" @click.native="jumpPage({path: '/profile'})">
            <i slot="icon" class="iconfont">&#xe637;</i>
            我的淘宝
        </mt-tab-item>
        <mt-tab-item id="more">
            <i slot="icon" class="iconfont">&#xe680;</i>
            更多
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
import { Tabbar, TabItem } from 'mint-ui'
export default {
  props: ['current'],
  data () {
    return {
      selected: this.current
    }
  },
  components: {
    mtTabbar: Tabbar,
    mtTabItem: TabItem
  },
  methods: {
    jumpPage (router) { // 页面跳转
      this.$router.push(router)
    }
  }
}
</script>

<style lang="less">
    .footer-tabbar {
        border-top: 1px solid #E7E7E7;
        background-color: #FFF;
        background-size: 100% 0;
        left: 50% !important;
        margin-left: -3.75rem;
        width: 100%;
        max-width: 7.5rem;
        height: .95rem;
        & > .mint-tab-item {
            padding: .1rem 0;
            &.is-selected {
                color: #FE5400;
                background-color: transparent;
            }
            .mint-tab-item-icon {
                font-size: .3rem;
                width: .3rem;
                height: .3rem;
                margin: 0 auto;
            }
            .mint-tab-item-label {
                margin-top: .15rem;
            }
        }
    }
</style>

