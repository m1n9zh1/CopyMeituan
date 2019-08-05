<template>
    <div class='m-product-select'>
        <dl class="tab">
            <dt>
                {{select.title}}
                <i class="el-icon-caret-bottom"></i>
            </dt>
            
            <dd>
                <dt>{{select.title}}</dt>
                <span v-for="item in select.subList" :key="item.id">{{item.name}}</span>
            </dd>
        </dl>
    </div>

</template>

<script>
export default {
    props: ['select']
}
</script>
<style scoped>

</style>