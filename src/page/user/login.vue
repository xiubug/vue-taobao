<template>
  <div class="login-container">
    <div class="login-warn">您需要登录才能继续访问<span class="close-btn" @click="closeWarn">关闭</span></div>
    <div class="login-top" flex="main:center cross:bottom">
      <span class="logo iconfont">&#xe60a;</span>
    </div>
    <div class="login-form">
      <mt-field placeholder="手机号/邮箱/会员名" v-model="username" />
      <mt-field placeholder="请输入密码" type="password" v-model="password" />
      <mt-button class="login-btn account" @click="login">登录</mt-button>
      <mt-button class="login-btn sms">短信验证码登录</mt-button>
    </div>
  </div>
</template>

<script>
import Storage from 'store'
import Config from '../../config/index'
import { createNamespacedHelpers } from 'vuex'
import { Field, Button, Toast } from 'mint-ui'
const userModule = createNamespacedHelpers('user')
export default {
  components: {
    mtField: Field,
    mtButton: Button
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...userModule.mapGetters([
      'isLogin'
    ])
  },
  methods: {
    ...userModule.mapActions([
      'goLogin'
    ]),
    async login () { // 登录
      await this.goLogin({username: this.username, password: this.password})
      if (this.isLogin) {
        Storage.set(Config.cookie, { // 模拟登录token
          token: (new Date()).getTime()
        })
        this.$router.push(this.$route.query.from)
      } else {
        this.password = '' // 置空密码框
        Toast('用户名或密码错误！')
      }
    },
    closeWarn () {
      console.log('closeWarn')
    }
  }
}
</script>
<style lang="less">
  .mint-cell {
    min-height: 1.2rem;
    .mint-cell-wrapper {
      background-size: 120% 0;
      font-size: .36rem;
      padding: 0 .1rem;
      border-bottom: 1px solid #ff5000;
    }
  }
</style>
<style lang="less" scoped>
  .login-container {
    width: 7.5rem;
    .login-warn {
      position: fixed;
      top: 0;
      width: 100%;
      left: 50%;
      margin-left: -3.75rem;
      padding-left: 20px;
      height: 1.2rem;
      line-height: 1.2rem;
      background-color: #eee;
      font-size: 16px;
      font-weight: bold;
      color: #333;
      .close-btn {
        position: absolute;
        right: 0;
        top: 0;
        padding: 0 20px;
        color: #999;
      }
    }
    .login-top {
      height: 2.7rem;
      width: 100%;
      .logo {
        font-size: 1.6rem;
        color: #ff5000;
      }
    }
    .login-form {
      margin: 1.2rem auto;
      width: 7rem;
      .login-btn {
        font-size: .36rem;
        width: 100%;
        height: .9rem;
        line-height: .9rem;
        border-radius: .6rem;
        text-align: center;
        margin-top: .5rem;
        &.account {
          background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
          box-shadow: 0 0.08rem 0.16rem #f7c7b1;
          border: 0;
          color: #fff;
        }
        &.sms {
          border: 1px solid #ff5000;
          color: #ff5000;
          background-color: #fff;
        }
      }
      .login-sms-btn {
        font-size: .42666667rem;
        width: 100%;
        height: 1.2rem;
        line-height: 1.2rem;
        border-radius: .6rem;
        text-align: center;
        border: 0;
        border: 1px solid #ff5000;
        color: #ff5000;
        background: #fff;
        text-decoration: none;
      }
    }
  }
</style>


