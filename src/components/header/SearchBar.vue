<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团logo" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="searching()"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-show="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="item in hotPlaceList" :key="item">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-show="isSearchList">
            <router-link
                tag="dd"
                class="searchItem"
                v-for="(item, index) in searchList"
                :key="index" 
                :to="{name: 'search', params: {name: item}}">
                {{item}}
            </router-link>
          </dl>
        </div>
        <p class="suggest">
          <a href="#" v-for="item in suggestList" :key="item">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api'
export default {

  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: [],
      searchList: ['火锅', '火锅自助', '火锅 海底捞', '火锅 重庆', '火锅2人餐', '火锅自助火锅'],
      suggestList: []
    }
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWord
    },
    isSearchList () {
      return this.isFocus && this.searchWord
    },

  },
  watch: {
        "$route.params.name": function () {
            this.searchWord = this.$route.params.name;
        }
    },
  created () {
    api.searchHotWords()
       .then(res => {
          this.hotPlaceList = res.data.data
          this.suggestList = res.data.data
        })
       .catch (err => {
          alert(err.msg)
        })
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      const self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    },
    searching () {
      api.searchWords()
         .then (res => {
           console.log(res)
           this.searchList = res.data.data.list.filter((item, index) => {
             return item.indexOf(this.searchWord) > -1
           })
         })
         .catch(err => {
           alert(err.msg)
         })
    }
  }
}
</script>
<style lang='scss' scoped>
// @import "@/assets/css/public/header/search.scss";
</style>
