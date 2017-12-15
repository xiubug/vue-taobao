<template>
  <div class="login-container">
    <div class="login-warn">您需要登录才能继续访问</div>
    <div class="login-top" flex="main:center cross:bottom">
      <span class="logo iconfont">&#xe60a;</span>
    </div>
    <div class="login-form">
      <mt-field placeholder="手机号/邮箱/会员名" v-model="username" />
      <mt-field placeholder="请输入密码" type="password" v-model="password" />
      <mt-button class="login-btn direct">登录</mt-button>
      <mt-button class="login-btn sms">短信验证码登录</mt-button>
    </div>
  </div>
</template>

<script>
import { Field, Button } from 'mint-ui'
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
  }
}
</script>

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
      font-size: 14px;
      font-weight: bold;
      color: #333;
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
        background: -webkit-linear-gradient(left,#ff9000,#ff5000) no-repeat;
        color: #fff;
        box-shadow: 0 0.08rem 0.16rem #f7c7b1;
        font-size: .36rem;
        width: 100%;
        height: .9rem;
        line-height: .9rem;
        border-radius: .6rem;
        text-align: center;
        border: 0;
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


