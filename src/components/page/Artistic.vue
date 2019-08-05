<template>
    <div class="m-istyle">
        <dl @mouseover="active" :class="nav.class">
            <dt>{{nav.titel}}</dt>
            <dd v-for="(item, index) in nav.list" :key="index" :class="{active: kind == item.class}" :data-type="item.class">{{item.text}}</dd>
        </dl>
        <ul class="ibody">
            <li v-for="item in cardList[kind]" :key="item.title">
               <el-card shadow="never" :body-style="{ padding: '0px' }">
                    <img :src="item.image">
                    <div class="el-card__body" style="padding: 0px;">
                        <ul class="cbody">
                            <li class="title" :title="item.title">{{item.title}}</li>
                            <li class="sub-title" :title="item.subTitle">{{item.subTitle}}</li>
                            <li class="price-info">
                                <span class="price-symbol">¥</span>
                                <span class="current-price">{{item.price}}</span>
                                <span class="old-price">{{item.oldPrice}}</span>
                                <span class="sold">{{item.sold}}</span>
                                <span class="units">{{item.units}}</span>
                            </li>
                        </ul>
                    </div>
                </el-card>
            </li>
        </ul>



    </div>

</template>

<script>
import api from '@/api.js'
export default {
    props: ['nav'],
    data () {
        return {
            kind: 'all',
            cardList: {}
        }
    },
    created () {
        api.resultsByKeywords()
           .then (res => {
               this.cardList = res.data.data
           })
    },
    methods: {
        active (e) {
            // console.log(e)
            let dom = e.target
            let tagName = dom.tagName.toLowerCase()
            if (tagName != 'dd') {
                return
            }
            this.kind = dom.getAttribute("data-type")
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/index/artistic.scss'
</style>