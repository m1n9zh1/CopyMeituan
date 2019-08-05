<template>
<div class="layout-default">
    <el-container>
        <el-header height="">
            <el-row>
                <my-header />
            </el-row>
        </el-header>
        <el-main>
            <router-view />
            <!-- <my-main /> -->
        </el-main>
        <el-footer height="">
            <my-footer />
        </el-footer>
    </el-container>
</div>
</template>

<script>
import MyHeader from '@/components/header/index.vue'
import MyFooter from '@/components/footer/index.vue'
// import MyMain from '@/components/page/index.vue'
export default {
  components: {
    MyHeader,
    // MyMain,
    MyFooter
  }
}
</script>
<style lang='scss'>
@import '@/assets/css/public/layout.scss';
</style>
