<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in list" :key="index">
        <a :href='"#city-"+ item' >{{item}}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :key="index">
      <dt :id="'city-'+ item.titel">{{index}}</dt>
      <dd>
        <span @click="changeCity(city)" v-for="city in item" :key="city.id">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api.js'
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityGroup: {}
    };

  },
  created () {
    api.getCityList().then((res) => {
      let obj = {}
      let data = res.data.data
      data.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)

      })
      console.log(obj)
      this.cityGroup = obj

    })
  },
  methods : {
    changeCity (city) {
      this.$store.dispatch('getPosition', city)
      this.$router.push({name: 'index'})
    }
  }

};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/categroy.scss"
</style>