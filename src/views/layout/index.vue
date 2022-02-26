<template>
    <div class="layout">
        <el-container>
            <el-aside>
                <nav-menu></nav-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="user-info">
                        <i class="el-icon-bell"></i>
                        <div class="info-number">11</div>
                        <img src="@/assets/user.jpeg" alt="">
                        <span>Admin</span>
                    </div>
                </el-header>
                <el-main>
                    <breadcrumb></breadcrumb>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
    
</template>
<script>
import navMenu from './navMenu.vue'
import breadcrumb from '@/components/common/breadcrumb'
export default {
    components:{
        navMenu,
        breadcrumb
    }
}
</script>
<style lang="scss" scoped>
.layout{
    height:100%;
}
.el-container{
    height:100%;
}
.el-header{
    background-color: #bbb;
    display:flex;
    align-items: center;
    position:relative;
    .user-info{
        width:150px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        position:absolute;
        right:100px;
        .el-icon-bell{
            font-size:20px;
        }
        .info-number{
            width:18px;
            height:18px;
            background:red;
            border-radius:50%;
            color:#fff;
            text-align:center;
            line-height:20px;
            position:absolute;
            left:9px;
            top:-2px;
        }
        img{
            width:30px;
            height:30px;
            border-radius:50%;
        }
    }
    
}
.el-aside{
    background-color: #666;
    // width: auto !important;
    width:220px !important;
}
// .el-aside::-webkit-scrollbar{
//     display:none;
// }
.el-main{
    background-color: #eee;
    padding:30px;
    position:relative;
}
</style>
