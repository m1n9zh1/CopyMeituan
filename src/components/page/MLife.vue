<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <a href="#" class="takeout">美团外卖</a>
        </li>
        <li>
          <a href="#">猫眼电影</a>
        </li>
        <li>
          <a href="#">美团酒店</a>
        </li>
        <li>
          <a href="#" class="apartment">民宿/公寓</a>
        </li>
        <li>
          <a href="#" class="business">商家入驻</a>
        </li>
        <li>
          <a href="#">美团公益</a>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slide />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col v-if="!userName" :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt />
          </h4>
          <p class="m-life-login-name">Hi！你好</p>
          <p>
            <router-link to="/">
              <el-button round>登录</el-button>
            </router-link>
          </p>
          <p>
            <router-link to="/">
              <el-button round>注册</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
      <el-col v-else :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png" alt />
          </h4>
          <p class="m-life-login-name">{{userName}}</p>
          <div class="fn-row clearfix">
            <div class="fn-item">
              <a href="https://www.meituan.com/orders/ " target="_blank">
                <div class="icon">
                  <i class="iconfont icon-order_iconx"></i>
                </div>
                <p class="fn-name">我的订单</p>
              </a>
            </div>
            <div class="fn-item">
              <a href="https://www.meituan.com/collections/" target="_blank">
                <div class="icon">
                  <i class="iconfont icon-collection_iconx"></i>
                </div>
                <p class="fn-name">我的收藏</p>
              </a>
            </div>
            <div class="fn-item">
              <a href="https://www.meituan.com/vouchers/" target="_blank">
                <div class="icon">
                  <i class="iconfont icon-ticket_iconx"></i>
                </div>
                <p class="fn-name">抵用券</p>
              </a>
            </div>
          </div>
          <div class="fn-row clearfix">
            <div class="fn-item">
              <a href="https://www.meituan.com/account/userinfo" target="_blank">
                <div class="icon">
                  <i class="iconfont icon-money_iconx"></i>
                </div>
                <p class="fn-name">余额</p>
              </a>
            </div>
            <div class="fn-item">
              <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                <div class="icon">
                  <i class="iconfont icon-more_iconx"></i>
                </div>
                <p class="fn-name">更多</p>
              </a>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <div class="m-life-hotel" />
      </el-col>
      <el-col :span="7">
        <div class="m-life-music" />
      </el-col>
      <el-col :span="4">
        <div class="m-life-coop" />
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span>1元起</span>
            <em>吃喝玩乐</em>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slide from "@/components/page/Slide.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userName"])
  },
  components: {
    Slide
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>