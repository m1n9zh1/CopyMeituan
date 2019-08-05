<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <m-life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <artistic :nav="istyle" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <artistic :nav="cheap" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from '@/components/page/MMenu.vue'
import MLife from '@/components/page/MLife.vue'
import Artistic from '@/components/page/Artistic.vue'
export default {
    data () {
        return {
           istyle: {
            class: 'istyle',
            titel: '有格调',
            list: [{
                class: 'all',
                text: '全部'
            },
            {
                class: 'food',
                text: '约会聚餐'
            },
            {
                class: 'spa',
                text: '丽人SPA'
            },
            {
                class: 'movie',
                text: '电影演出'
            },
            {
                class: 'travel',
                text: '品质出游'
            }]
          } ,
          cheap: {
              class: 'youhui',
              titel: '狠优惠',
              list: [{
                  class: 'all',
                  text: '全部'
              },
              {
                  class: 'food',
                  text: '美食'
              },
              {
                  class: 'leisure',
                  text: '休闲'
              }]
          }
        }
    },
    components: {
        MMenu,
        MLife,
        Artistic,

    }
}
</script>
<style lang='scss'>
@import "@/assets/css/index/index.scss";
</style>