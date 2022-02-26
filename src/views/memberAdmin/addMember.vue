<template>
  <div class="add-member">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新增会员</span>
        <el-button style="float: right; padding: 3px 0" type="text"
            @click="changeWindowState('close')"
          >
          <i class="el-icon-close"></i>
          </el-button
        >
      </div>
      <el-form label-width="90px" 
        class="demo-ruleForm"
        :rules="rules"
        :model="ruleForm"
        ref="ruleForm"
      >
        <el-form-item label="会员姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="tel">
          <el-input v-model="ruleForm.tel"></el-input>
        </el-form-item>
        <el-form-item label="会员年龄" prop="age">
          <el-input v-model="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="ruleForm.gender">
            <el-radio label="0">男</el-radio>
            <el-radio label="1">女</el-radio>
            <el-radio label="2">其他</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="常用收货人" prop="consignee">
          <el-input v-model="ruleForm.consignee"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <!-- 照片 -->
        <el-form-item label="照片" prop="imgUrl">
            <el-upload
              class="avatar-uploader"
              action="http://localhost:3001/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              :headers="headers"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-row>
          <el-col :span="6">
            <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import {addMember } from "@/api/http.js"
export default {
  data() {
    return {
        rules:{
            info:[
                {required:true,message:"请输入姓名",trigger:"blur"},
                {min:2,max:8,message:"请输入2到8个字符",trigger:"blur"}
            ]
        },
        ruleForm:{
            name:'',
            tel:'',
            age:'',
            gender:'',
            consignee:'',
            address:'',
            imgUrl:''
        },
        imageUrl:'',
        headers:{
            Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if(valid){
                addMember(this.ruleForm)
                .then(res => {
                    let {code} = res.data
                    if(code === 0){
                        this.$message.success("添加成功")
                        this.changeWindowState('success')
                    }
                    else{
                        this.$message.error("添加失败")
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }else {
                console.log("error submit!!");
                return false;
            }
        })
    },
    resetForm(formName) {
      this.imageUrl = ''
      this.$refs['ruleForm'].resetFields()
    },
    // 关闭窗口
    changeWindowState(type){
        this.$emit("closeWindow",type)
    },
    // 图片上传
    // 处理上传成功之后的代码
    handleAvatarSuccess(res, file) {
      //URL.createObjectURL 会基于提供的文件信息,生成一个可用的文件的url地址
      this.imageUrl = URL.createObjectURL(file.raw);
      this.ruleForm.imgUrl = res.url;
    },
    //处理上传之前格式和尺寸的验证
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      //return true,则继续完成上传的逻辑,return false, 终止上传的任务
      return isJPG && isLt2M;
    },
  },
};
</script>
<style lang="scss" scoped>
.add-member {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right:0;
  bottom:0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  .demo-ruleForm {
    width: 400px;
    height: 500px;
    background-color: #fff;
  }
}
.el-icon-close{
    font-size:24px;
    color:#aaa;
}
// 缩略图样式
.avatar-uploader ::v-deep .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader ::v-deep .el-upload:hover {
  border-color: #409eff;
}
::v-deep .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>