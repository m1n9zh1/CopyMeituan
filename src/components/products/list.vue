<template>
<div class="m-products-list">
    <ul>
        <li :class='{"s-nav-active": item.active}' v-for='item in menu' :key="item.key">{{item.name}}</li>
    </ul>
    <item v-for="v in item" :key="v.title" :content="v" />
</div>

</template>

<script>
import api from '@/api.js'
import Item from './item'
export default {
    data () {
        return {
            menu: [{
                key: 's-default',
                name: '智能排序',
                active: true
            },
            {
                key: 's-price',
                name: '价格最低',
                active: false
            },
            {
                key: 's-sale',
                name: '人气最高',
                active: false
            },
            {
                key: 's-comment',
                name: '评论最高',
                active: false
            }],
            item: [{
                img: '//p0.meituan.net/deal/51493899ec273cfe5a415d3293ed4a29121087.jpg@220w_125h_1e_1c',
                title: '上野日本料理',
                score: 4.8,
                comment: 345,
                tab: ['日本菜', '沙井'],
                address: '宝安区沙井新桥北环路84号一楼',
                avg_price: 64,
                deal: [{
                     title: '双人套餐，提供免费WiFi',
                    price: 128,
                    retail_price: 271,
                    saleNum: 736,
                },
                {
                    title: '四人套餐，提供免费WiFi',
                    price: 228,
                    retail_price: 448,
                    saleNum: 373,
                }]
            },
            {
                img: '//p1.meituan.net/msmerchant/bb9f69dc969921eddf55ebeec4946581125027.jpg@220w_125h_1e_1c',
                title: '初春日式料理·寿司',
                score: 5,
                comment: 338,
                tab: ['日式寿司', '公明'],
                address: '光明区公明镇丰明电脑城旁初春寿司',
                avg_price: 41,
                deal: [{
                    title: '炙烧拼盘套餐，建议2人使用',
                    price: 68,
                    retail_price: 83,
                    saleNum: 335,
                },
                {
                    title: '日式爱の恋双人餐',
                    price: 79,
                    retail_price: 98,
                    saleNum: 248,
                }]
            }]
        }
    },
    created () {
        api.getGoodsList()
           .then(res => {
               this.item = res.data.data
           })
    },
    components: {
        Item
    }
}
</script>
<style scoped>

</style>