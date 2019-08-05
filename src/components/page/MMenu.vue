<template>
    <div class="m-menu">
        <dl class="nav"  @mouseleave="menuLeave">
            <dt>全部分类</dt>
            <dd v-for="item in menuList" :key="item.name" @mouseenter="menuEnter(item)">
                <i :class="item.type"></i>
                <a href="#">{{item.name}}</a>
                <span class="arrow"></span>
                
            </dd>
        </dl>
        <div v-show="curDetail" class="detail" @mouseenter="detailEnter"  @mouseleave="detailLeave">
            <template v-for="(item, index) in curDetail">
                <h4 :key="index">{{item.title}}</h4>
                <span v-for="v in item.items" :key="v">{{v}}</span>
            </template>
        </div>
    </div>

</template>

<script>
import api from '@/api'
export default {
    data () {
        return {
            curDetail: null,
            menuList: []
        }
    },
    created () {
        api.getNavList()
           .then(res => {
               this.menuList = res.data.data
           })
    },
    methods: {
        menuEnter (item) {
            this.curDetail = item.items
        },
        menuLeave () {
            let self = this
            this.timer = setTimeout(function () {
                self.curDetail = null
            }, 100)
        },
        detailEnter () {
            clearTimeout(this.timer)
        },
        detailLeave () {
            this.curDetail = null
        }
    }
}
</script>
<style scoped>

</style>