<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>会员数据报表</span>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="grade" label="会员等级" width="180">\
          <template v-slot="scope">
            {{scope.row.grade | gradeFormat}}
          </template>
      </el-table-column>
      <el-table-column prop="number" label="成交会员数" width="180">
      </el-table-column>
      <el-table-column prop="memberProportion" label="成交会员占比">
      </el-table-column>
      <el-table-column prop="orderNumber" label="支付订单数"> </el-table-column>
      <el-table-column prop="unitPrice" label="客单价(元)"> </el-table-column>
      <el-table-column prop="payAmount" label="支付金额(元)"> </el-table-column>
      <el-table-column prop="payProportion" label="支付金额占比">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script> 
import {selectMemberData} from "@/api/http.js"
export default {
    data(){
        return{
            tableData:[],
            page:1,
            total:0
        }
    },
    created(){
        this.getData()
    },
    filters:{
        gradeFormat(grade){
            if(grade == 1) return '白金会员'
            if(grade == 2) return '水晶会员'
            if(grade == 3) return '钻石贵宾'
        }
    },
    methods:{
        async getData(){
            try{
                let res = await selectMemberData({page:this.page});
                let {code,list,total} =res.data;
                // console.log(res)
                if(code === 0){
                    this.tableData = list;
                    this.total = total;
                }
            }
            catch(err){
                console.log(err);
            }     
        }
    }
}
    
</script>

<style lang="scss" scoped>
.el-card {
  border-radius: 16px;
  .el-table {
    font-size: 16px;
  }
  .el-card__header {
    font-size: 18px;
  }
}
</style>