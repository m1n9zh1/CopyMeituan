<template>
<div class="m-hcity">
    <dl>
        <dt>{{info.title}}</dt>
        <dd v-for="item in info.list" :key="item.name"><a href="#">{{item.name}}</a></dd>
    </dl>
</div>
    

</template>

<script>
export default {
    props: ['info'],
    data () {
        return {

        }
    }
}
</script>
<style lang="scss">
@import '@/assets/css/changeCity/hot.scss'

</style>