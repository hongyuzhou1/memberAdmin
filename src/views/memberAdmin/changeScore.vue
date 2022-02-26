<template>
  <div class="change-score">
    <el-card>
      <div slot="header" class="clearfix">
        <span>修改积分</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="changeWindowState()"
        >
          <i class="el-icon-close"></i>
        </el-button>
      </div>
      <el-form
        label-width="90px"
        class="demo-ruleForm"
        :rules="rules"
        :model="ruleForm"
        ref="ruleForm"
      >
        <el-form-item label="当前积分" prop="score">
          <el-input v-model="ruleForm.score" disabled></el-input>
        </el-form-item>
        <el-form-item label="更新积分" prop="newScore">
          <el-input v-model="ruleForm.newScore"></el-input>
        </el-form-item>
        <el-form-item label="操作备注" prop="scoreRemark">
          <el-input v-model="ruleForm.scoreRemark"></el-input>
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
import { editScore } from "@/api/http.js";
export default {
  props: {
    ruleForm: Object,
    // parentScore:Object
  },
  data() {
    return {
      rules: {
        newScore: [
          { required: true, message: "请输入新积分", trigger: "blur" },
          { min: 1, max: 5, message: "请输入1到5个字符", trigger: "blur" },
        ],
      },
      // ruleForm: {
      //   score: "",
      //   newScore: "",
      //   memberId: "",
      // },
    };
  },
  watch: {
    // 深度监听
    // parentScore: {
    //   handler: function () {
    //     this.ruleForm.score = this.parentScore.score;
    //     this.ruleForm.memberId = this.parentScore.memberId;
    //   },
    //   deep: true,
    //   immediate:true
    // },

  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          editScore(this.ruleForm)
            .then((res) => {
              let { code } = res.data;
              if (code === 0) {
                this.$message.success("修改成功");
                this.changeWindowState();
              } else {
                this.$message.error("修改失败");
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
    changeWindowState(){
      this.$emit("changeEditScoreState")
    }
  },
};
</script>
<style lang="scss" scoped>
.change-score {
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
