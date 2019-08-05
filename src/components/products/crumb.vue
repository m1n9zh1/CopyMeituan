<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">{{position}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{position}}美食</el-breadcrumb-item>
        <el-breadcrumb-item v-if="detail">{{position}}火锅</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    props: ['detail'],
    data () {
        return {
            position: this.$store.state.position.name
        }
    }
};
</script>
<style scoped>
</style>