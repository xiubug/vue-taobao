<template>
    <mt-tabbar v-model="selected" class="footer-tabbar" fixed>
        <mt-tab-item id="home">
            <i slot="icon" class="iconfont">&#xe7d4;</i>
            首页
        </mt-tab-item>
        <mt-tab-item id="logistics">
            <i slot="icon" class="iconfont">&#xe6b0;</i>
            物流
        </mt-tab-item>
        <mt-tab-item id="shoppingCart">
            <i slot="icon" class="iconfont">&#xe670;</i>
            购物车
        </mt-tab-item>
        <mt-tab-item id="myTb">
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
  data () {
    return {
      selected: 'home'
    }
  },
  components: {
    mtTabbar: Tabbar,
    mtTabItem: TabItem
  }
}
</script>

<style lang="less" scoped>
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

