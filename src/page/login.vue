<template>
  <div class="page-login">
    <header class="login-header">
      <div class="logo"></div>
    </header>
    <div class="login-panel">
      <img
        class="banner"
        src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
        alt
      />
      <div class="form">
        <div :class="['tips', error?'show':'']">
          <i></i>
          {{error}}
        </div>
        <p>账号登录</p>
        <el-input
          @focus="iFocus"
          :class="{'blank': error == '请输入账号'}"
          placeholder="账号/邮箱/手机号"
          prefix-icon="profile"
          v-model="userName"
        ></el-input>
        <el-input
          @focus="iFocus"
          :class="{'blank': error == '请输入密码'}"
          placeholder="密码"
          type="password"
          prefix-icon="password"
          v-model="password"
        ></el-input>
        <div class="foot">
          <a href="#">忘记密码？</a>
        </div>
        <el-button @click="submit" type="primary" class="btn-login">登录</el-button>
        <p>
            <span>还没有账号？</span>
            <a href="">免费注册</a>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <footer>
        <ul >
          <li>
            <a href="#">关于美团</a>
          </li>
          <li>
            <a href="#">加入我们</a>
          </li>
          <li>
            <a href="#">商家入驻</a>
          </li>
          <li>
            <a href="#">帮助中心</a>
          </li>
          <li>
            <a href="#">美团手机版</a>
          </li>
        </ul>
        <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
      </footer>
  </div>
</template>

<script>
import api from "@/api.js";
export default {
  data() {
    return {
      userName: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submit() {
      if (!this.userName) {
        this.error = "请输入账号";
      } else if (!this.password) {
        this.error = "请输入密码";
      }
      api
        .login({
          params: {
            userName: this.userName,
            password: this.password
          }
        })
        .then(res => {
          if (res.data.status == "success") {
            this.$store.commit('setUserName', res.data.data)
            alert(res.data.msg);
            this.$router.push("index");
          } else if (res.data.status == "fail") {
            this.error = res.data.msg;
          }
        });
    },
    iFocus() {
      this.error = "";
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>