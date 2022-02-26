<template>
  <div class="add-mony">
    <el-card>
      <div slot="header" class="clearfix">
        <span>储值卡充值</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="changeAddMonyState()"
        >
          <i class="el-icon-close"></i>
        </el-button>
      </div>
      <el-form
        label-width="100px"
        class="demo-ruleForm"
        :rules="rules"
        :model="ruleForm"
        ref="ruleForm"
      >
        <el-form-item label="当前金额(元)" prop="mony">
          <el-input v-model="ruleForm.mony" disabled></el-input>
        </el-form-item>
        <el-form-item label="充值金额(元)" prop="addMony">
          <el-input v-model="ruleForm.addMony"></el-input>
        </el-form-item>
        <el-form-item label="赠送金额(元)" prop="giveMony">
          <el-input v-model="ruleForm.giveMony"></el-input>
        </el-form-item> 
        <el-form-item label="操作备注" prop="monyRemark">
          <el-input v-model="ruleForm.monyRemark"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="6">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >确认</el-button
            >
          </el-col>
          <el-col :span="6">
            <el-button type="danger" @click="resetForm('ruleForm')"
              >重置</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { addMony } from "@/api/http.js";
export default {
  props: {
    ruleForm: Object,
  },
  data() {
    return {
      rules: {
        newScore: [
          { required: true, message: "请输入新积分", trigger: "blur" },
          { min: 1, max: 5, message: "请输入1到5个字符", trigger: "blur" },
        ],
      },
    };
  },
  created(){
    console.log(ruleForm)
  },
  watch: {
    
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addMony(this.ruleForm)
            .then((res) => {
              let { code } = res.data;
              if (code === 0) {
                this.$message.success("充值成功");
                this.changeAddMonyState('success');
              } else {
                this.$message.error("充值失败");
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs["ruleForm"].resetFields();
    },
    changeAddMonyState(action){
      this.$emit("changeAddMonyState",action)
    }
  },
};
</script>
<style lang="scss" scoped>
.add-mony {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  .demo-ruleForm {
    width: 400px;
    height: 300px;
    background-color: #fff;
  }
}
.el-icon-close{
    font-size:24px;
    color:#aaa;
}
</style>
