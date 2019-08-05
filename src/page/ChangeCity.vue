<template>
    <div class="page-changeCity">
        <el-row>
            <province />
        </el-row>
        <el-row>
            <hot-city :info="hotCityInfo" />
        </el-row>
        <el-row>
            <hot-city :info="recently"/>
        </el-row>
        <el-row>
            <all-city />
        </el-row>
    </div>

</template>

<script>
import api from '@/api.js'
import Province from '@/components/changeCity/province.vue'
import HotCity from '@/components/changeCity/hotCity.vue'
import AllCity from '@/components/changeCity/allCity.vue'

export default {
    data () {
        return {
            hotCityInfo: {
                title: '热门城市：',
                list: ['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都']
            },
            recently: {
                title: '最近访问：',
                list: ['广州', '深圳']
            }
        }
    },
    created () {
        api.getHotCityList()
           .then(res => {
               this.hotCityInfo.list = res.data.data
           })
        api.getRecentsList().then(res => {
            this.recently.list = res.data.data
        })
    },
    components: {
        Province,
        HotCity,
        AllCity
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/changeCity/iselect.scss'
</style>