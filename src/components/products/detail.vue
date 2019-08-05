<template>
  <div class="page-detail">
    <el-row class="m-crumbs">
      <crumb :detail="flag" />
    </el-row>
    <el-row class="m-detail">
      <el-col :span="16">
        <div class="d-name">
          {{detailList.title}}
          <span>
            <i class="el-icon-success"></i>
            食品安全档案
          </span>
        </div>
        <div class="d-score">
          <el-rate
            v-model="detailList.score"
            disabled
            text-color="#ff9900"
            score-template="{value}"
          ></el-rate>
          <p>
            <span>{{detailList.score}}分</span>
            <span>人均￥{{detailList.avgPrice}}</span>
          </p>
        </div>
        <div class="d-address">
          <p>地址：{{detailList.address}}</p>
          <p>电话：{{detailList.phone}}</p>
          <p>营业时间：{{detailList.businessTime}}</p>
        </div>
        <ul class="d-tag">
          <li>
            <img src="http://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png" alt />
            <span>提供wifi</span>
          </li>
        </ul>
      </el-col>
      <el-col :span="8">
        <div class="d-image">
          <div class="big">
            <div class="imgbox" style="height: 100%; width: 100%;">
              <img
                src="http://p0.meituan.net/merchantpic/30eab3a5c05e3646e1a68ac27a80c641379674.jpg@380w_214h_1e_1c"
              />
            </div>
          </div>
          <ul>
            <li>
              <div class="imgbox" style="height: 100%; width: 100%;">
                <img
                  src="https://img.meituan.net/msmerchant/60cb229f103fe13ac8da405c31a46a711675587.jpg@92w_50h_1e_1c"
                />
              </div>
            </li>
            <li>
              <div class="imgbox" style="height: 100%; width: 100%;">
                <img
                  src="https://img.meituan.net/msmerchant/7d033959616f93ac85437fc4e2cd11f31536743.jpg@92w_50h_1e_1c"
                />
              </div>
            </li>
            <li>
              <div class="imgbox" style="height: 100%; width: 100%;">
                <img
                  src="https://img.meituan.net/msmerchant/093583c35dac02c38fac0b0dc4d450601419245.jpg@92w_50h_1e_1c"
                />
              </div>
            </li>
            <li>
              <div class="imgbox" style="height: 100%; width: 100%;">
                <img
                  src="https://img.meituan.net/msmerchant/407c8cf19d74e480992fa427d6d1f4861586874.jpg@92w_50h_1e_1c"
                />
              </div>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="m-cont">
      <el-col :span="19">
        <div class="m-cont-left">
          <div>
            <h3>商家团购及优惠</h3>
            <div v-if="!$store.state.userName" class="need-login">
              <img
                src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png"
                alt="登录查看"
              />
              <span>请登录后查看详细团购优惠</span>
              <router-link tag="button" :to="{name: 'login'}" class="btn">立即登录</router-link>
            </div>
            <div v-else class="group">
              <h4>2款堂食套餐</h4>
              <div
                :class="['box', index == detailList.dealItems.length - 1?'':'hasBorder']"
                v-for="(item, index) in detailList.dealItems"
                :key="index"
              >
                <img
                  src="http://p1.meituan.net/208.126/deal/51ef4202c6c0522e20a0ca2589576f45197710.jpg@100w_100h_1e_1c"
                  alt
                />
                <div class="info">
                  <p class="i-title">
                    <span>{{item.title}}</span>
                    <img
                      src="http://p1.meituan.net/codeman/31eac2c905f5be14ce80654d9508e720832.png"
                      alt
                    />
                  </p>
                  <p class="i-sale">已售{{item.saleNum}}</p>
                  <p class="i-price">
                    <span>￥</span>
                    {{item.price}}
                    <b>门店价￥{{item.counterPrice}}</b>
                  </p>
                </div>
                <a class="buy" href="#">立即抢购</a>
              </div>
            </div>
          </div>
          <div class="d-recommend">
            <h3>推荐菜</h3>
            <ul class="dishes">
              <li class="deal-item" v-for="item in detailList.recommend" :key="item">{{item}}</li>
            </ul>
          </div>
          <div class="d-comment">
              <h3>{{detailList.commentNum}}条网友评论</h3>
              <div class="com-cont" v-for="(item, index) in detailList.comment" :key="index">
                  <div class="list">
                      <div class="icon">
                          <img :src="item.image" alt="头像">
                      </div>
                      <div class="info">
                          <p class="name">{{item.username}}</p>
                          <p class="rate">
                              <el-rate
                                v-model="item.rate"
                                disabled
                                text-color="#ff9900"
                                score-template="{value}">
                            </el-rate>
                          </p>
                          <p class="desc">{{item.evalaute}}</p>
                          <div class="show-img">
                              <div class="imgbox" v-for="v in item.pics" :key="v">
                                  <img :src="v" alt="">
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </el-col>
      <el-col :span="5" class="m-cont-right">
          <recommend :showMap="map"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import crumb from "./crumb";
import api from "@/api";
import recommend from '@/components/products/recommend.vue'
export default {
  data() {
    return {
      flag: true,
      detailList: {},
      map: true
    };
  },
  created() {
    api.detail().then(res => {
      this.detailList = res.data.data;
      console.log(res);
    });
  },
  components: {
    crumb,
    recommend
  }
};
</script>
<style lang="scss">
@import "@/assets/css/products/detail.scss";
</style>