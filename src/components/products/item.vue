<template>
    <dl class="s-item" >
        <dt>
            <img :src="content.image" alt="">
        </dt>
        <dd>
            <h3>
                <router-link :to="{name: 'detail'}">{{content.title}}</router-link>
            </h3>
            
            <p>
                <el-rate v-model="content.score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
                <span v-if="+content.score > 4.5">很好</span>
                <span v-else-if="+content.score > 4">好</span>
                <span v-else-if="+content.score > 3.5">不错</span>
                <span v-else-if="+content.score >= 3">一般</span>
                <span v-else>差</span>
                <span>{{+content.score}}分</span>
                <span class="s-item-comment-total">{{content.commentNum}}人评论</span>
            </p>
            <p>
                <span class="s-item-tab">
                    <span v-for="(item, index) in content.tab" :key="index">{{item + (index < content.tab.length - 1 ? '|' : '')}} </span>
                </span>
                <span class="s-item-addr">{{content.address}}</span>
                <span>
                    <i class="el-icon-location"></i>
                    <a href="#">查看地图</a>
                </span>
            </p>
            <p>
                <span class="s-item-price">人均￥{{content.avgPrice}}</span>
            </p>
            <ul class="deal-items">
                <li class="items" v-for="item in content.dealItems" :key="item.title">
                    <p class="deal-title">
                        {{item.title}}
                    </p>
                    <p>
                        <span class="deal-price">￥{{item.price}}</span>
                        <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                        <span class="deal-sales">已售{{item.saleNum}}</span>
                    </p>
                </li>
            </ul>
        </dd>
    </dl>

</template>

<script>
export default {
    props: ['content']
}
</script>
<style scoped>

</style>