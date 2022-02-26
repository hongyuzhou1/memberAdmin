<template>
    <div>
        <el-submenu  :index="item.path">
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item
                :index="item.path + '/' + smallItem.path"
                v-for="smallItem in item.children"
                :key="smallItem.path"
            >
                <i :class="smallItem.meta.icon"></i>
                <span>{{smallItem.meta.title}}</span>
            </el-menu-item>
        </el-submenu>
    </div>
</template>
<script>
export default{
    props:{
        item:Object
    }
}
</script>
<style lang="scss" scoped>
::v-deep .el-submenu__title{
        font-size:16px;
    }
.el-menu-item{
    font-size:16px;
}
</style>
