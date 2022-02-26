<template>
    <div class="data-classify">
        <div class="data-line">
            <div class="data-item">
                <p class="title">支付金额(元)</p>
                <p class="number">12350</p>
                <p class="change">
                    较上期
                    <span>
                        <i class="el-icon-caret-top"></i>
                        12%
                    </span>
                </p>
            </div>
            <div class="data-item">
                <p class="title">支付笔数</p>
                <p class="number">150</p>
                <p class="change">
                    较上期
                    <span>
                        <i class="el-icon-caret-top"></i>
                        12%
                    </span>
                </p>
            </div>
        </div>
        <div class="data-line">
            <div class="data-item">
                <p class="title">新增会员数</p>
                <p class="number">680</p>
                <p class="change">
                    较上期
                    <span>
                        <i class="el-icon-caret-top"></i>
                        12%
                    </span>
                </p>
            </div>
            <div class="data-item">
                <p class="title">新增储值会员数</p>
                <p class="number">176</p>
                <p class="change">
                    较上期
                    <span>
                        <i class="el-icon-caret-top"></i>
                        12%
                    </span>
                </p>
            </div>
        </div>    
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.data-classify{
    .data-line{
        display:flex;
    }
    .data-item{
        width:260px;
        height:140px;
        background-color: #fff;
        border-radius:16px;
        border:1px solid #ccc;
        margin:0 0 30px 30px;
        padding:18px;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        .title{
            font-size:16px;
            color:#bbb;
        }
        .number{
            font-size:30px;
            font-weight:700;
        }
        .change{
            font-size:14px;
            color:#bbb;
            span{
                color:#8FD96C;
                font-weight:500;
            }
        }
    }
    .data-item:hover{
        border:2px solid #2E61FE;
    }
}
</style>
