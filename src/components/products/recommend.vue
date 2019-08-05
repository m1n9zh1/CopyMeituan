<template>
    <div class="m-recommend">
        <div v-if="!showMap" class="m-map">
            <img src="https://p1.meituan.net/180.180/wedding/496733fea04cffadb444af6eaeba919a809146.png@220w_125h_1e_1c" alt="">
        </div>
        <dl class="m-like">
            <dt>
                猜你喜欢
            </dt>
            <dd v-for="(item, index) in recommendList" :key="index">
                <img src="https://p1.meituan.net/msmerchant/1e8e5a4e68303097a5dc495a12dd5b74468027.jpg@190w_106h_1e_1c" alt="">
                <p>{{item.title}}</p>
                <p>
                    <el-rate
                        v-model="item.score"
                        disabled
                        text-color="#ff9900">
                    </el-rate>
                    <span class="comment">
                        {{item.commentNum}}个评价
                    </span>
                </p>
                <p class="area">{{item.areaName}}</p>
                <p class="priceWrap">
                    ￥<span>{{item.avgPrice}}</span>
                    <b>起</b>
                </p>
            </dd>
        </dl>
    </div>

</template>

<script>
import api from '@/api.js'
export default {
    props:['showMap'],
    data () {
        return {
            recommendList : []
        }
    },
    created () {
        api.getRecommendList()
           .then(res => {
                this.recommendList = res.data.data
           })
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/products/recommend.scss"
</style>