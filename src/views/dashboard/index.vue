<template>
    <div class="dashboard">
        <div class="datas">
            <echart></echart>
            <data-classify></data-classify>
        </div>
        <member-data></member-data>
    </div>
</template>
<script>
import echart from './echart.vue';
import dataClassify from './dataClassify.vue';
import memberData from './memberData.vue'
export default{
    components:{
        echart,
        dataClassify,
        memberData
    }
}
</script>
<style lang="scss" scoped>
.dashboard{
    margin-top:30px;
}
.datas{
    display:flex;
}

</style>
