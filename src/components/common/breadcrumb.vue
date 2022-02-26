<template>
    <el-card>
         <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <p class="title">{{title}}</p>
    </el-card>
</template>
<script >
export default {
    data(){
        return{
            breadcrumbList:[],
            title:""
        }
    },
    watch:{
        $route:{
            handler(to,from){
                if(to.matched[0].meta.title){
                    this.breadcrumbList = this.$route.matched.map(
                        (record) => record.meta.title
                    )
                }else{
                    this.breadcrumbList = this.$route.matched.slice(1).map((record) => {
                        return record.meta.title
                    })
                }
                // 页面标题
                let index = this.breadcrumbList.length - 1
                this.title = this.breadcrumbList[index]
            },
            immediate: true,
        }
    }
}
</script>
<style lang="scss" scoped>
.title{
    font-size:20px;
    font-weight:bolder;
    padding-top:20px;
}
</style>