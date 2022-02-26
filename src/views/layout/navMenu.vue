<template>
    <div class="nav-menu">
        <div class="logo">
            <div class="logo-img">
                <img src="https://www.pmdaniu.com/storages/127353/ae9547e3c36df189fcd9e402f9f05520-105941/images/登录/u112.svg" alt="">
            </div>
            <span>XX会员管理系统</span>
        </div>
        <el-menu
            :default-active="$route.fullPath"
            @open="handleOpen"
            @close="handleClose"
            background-color="#666"
            text-color="#fff"
            active-text-color="#409EFF"
            :collapse-transition="false"
            :router="true"
        >
            <menu-item v-for="item in routesList" :key="item.path" :item="item"></menu-item>
        </el-menu>
    </div>
</template>
<script>
import asyncRoutes from '@/router/asyncRoutes'
import menuItem from './menuItem.vue'
export default{
    components:{
        menuItem
    },
    data(){
        return{
            activeIndex:"/dashboard",
            routesList:asyncRoutes
        }
    },
    methods:{
        handleOpen(key,kePath){
            // console.log(key, keyPath);
        },
        handleClose(key,kayPath){
            // console.log(key, keyPath);
        }
    }

}
</script>
<style lang="scss" scoped>
.nav-menu{
    height:100%;
    .logo{
        height:60px;
        display:flex;
        justify-content: space-around;
        align-items:center;
        font-size:20px;
        color:#409EFF;
        .logo-img{
            width:40px;
            height:40px;
            background:#409EFF;
            border-radius:50%;
            text-align: center;
            line-height:40px;
        }
    }
    .el-menu{
        // height:100%;
        border:0 ;
    }
}

</style>
