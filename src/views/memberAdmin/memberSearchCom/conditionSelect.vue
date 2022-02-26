<template>
  <div class="select-member">
    <el-card>
      <el-form ref="form" :model="form" label-width="90px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="会员名称" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="下单次数" prop="ordrNumber">
              <el-input v-model="form.orderNumber"></el-input>
            </el-form-item>
            <el-form-item label="会员手机号" prop="tel">
              <el-input v-model="form.tel"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="4" :offset="1">
            <el-button type="primary" @click="submitForm('form')">查询</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="danger" @click="resetForm('form')">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import {searchMember} from "@/api/http.js"
export default {
  data(){
    return{
      form:{
        name:"",
        orderNumber:"",
        tel:""
      }
    }
  },
  methods:{
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){
          searchMember(this.form)
          .then((res) => {
            let data = res.data.list
            this.$emit("send",data)
          })
          .catch((err) => {
            console.log(err);
          })
        }
        else{
          console.log("error submit!");
          return false
        }
      })
    },
    resetForm(formName){
      this.$refs["form"].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.el-form-item{
  .el-input__innner{
    width:150px;
  }
}
</style>