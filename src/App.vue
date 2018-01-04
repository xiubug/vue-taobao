<template>
  <div class="max-width">
    <router-view></router-view>
  </div>
</template>

<script>
import 'flex.css'
export default {
  data () {
    return {}
  },
  mounted () {
    this.appShow()
  },
  methods: {
    appShow () {
      const { START_TIME } = window
      const END_TIME = new Date().getTime() // 结束时间
      const diffTime = END_TIME - START_TIME
      const timer = setTimeout(() => {
        clearTimeout(timer)
        document.querySelector('.app-loading').className += ' app-loading-hide'
      }, diffTime > 2000 ? 0 : 2000 - diffTime)
    }
  }
}
</script>

<style lang="less">
@import './assets/style/common';
</style>

