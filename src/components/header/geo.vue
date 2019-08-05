<template>
    <div class="m-geo">
        <div class="position">
            <span class="el-icon-location"/>
            <span>{{position.name}}</span>
            <router-link class="changeCity" :to="{name: 'changeCity'}">切换城市</router-link>
            [
            <a href="#" v-for="item in nearCity" :key="item.id">{{item.name}}</a>
            ]
        </div>
        <div class="m-user">
            <router-link v-if="!userName" class="login" :to="{name : 'login'}">立即登录</router-link>
            <a class="username" v-else href="">{{userName}}</a>
            <router-link v-if="!userName" class="register" :to="{name : 'register'}">注册</router-link>
            <span v-else @click="exit">退出</span>
        </div>
    </div>

</template>

<script>
import api from '@/api.js'
import {mapState} from 'vuex'
export default {
    data () {
        return {
            nearCity: [],
        }
    },
    watch: {
        "$store.state.position": function () {
            this.nearCity = this.$store.state.position.nearCity
        }
    },
    computed: {
        ...mapState(['position', 'userName'])
    },
    created () {
        api.getPosition().then(res => {
            this.$store.dispatch('getPosition', res.data.data)
            this.nearCity = res.data.data.nearCity
        })
        console.log('zheshiehihi', this.userName)
    },
    methods: {
        exit () {
            this.$store.commit('setUserName', '')
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
