<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classify" :key="item.title">
        <m-select :select="item"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in area" :key="item.title">
        <m-select :select="item"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import api from '@/api.js'
import MSelect from "./select";
export default {
  data () {
      return {
          classify: [{
              title: '美食',
              list: ['全部', '食品保健', '特色菜', '日本菜', '面包甜点', '火锅自助餐', '小吃快餐']
          },
          {
              title: '家装',
              list: ['全部', '家具', '家居']
          }],
          area: [{
              title: '推荐商圈',
              list: ['沙井', '龙华', '西乡', '海岸城/保利', '车公庙', '坂田', '福永', '横岗']
          },
          {
              title: '福田区',
              list: ['全部', '香蜜湖', '梅林', '上沙/下沙', '华强南', '八卦岭/园岭', '华强北']
          }]
      }
  },
  created () {
    api.getClassifyList()
       .then(res => {
         this.classify = res.data.data
       })
    // api.getAreaList()
    //    .then(res => {
    //      this.area = res.data
    //      console.log(this.area)
    //    })
  },
  components: {
    MSelect
  }
}
</script>
<style scoped>
</style>