<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumb />
        </el-row>
        <el-row>
            <el-col :span="19">
                <category />
                <list />
            </el-col>
            <el-col :span="5">
                <recommend />
            </el-col>
        </el-row>
    </div>

</template>

<script>
import Crumb from '@/components/products/crumb'
import Category from '@/components/products/category'
import List from '@/components/products/list'
import Recommend from '@/components/products/recommend'
export default {
    components: {
        Crumb,
        Category,
        List,
        Recommend
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/products/index.scss'

</style>