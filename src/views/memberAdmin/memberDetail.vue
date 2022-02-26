<template>
  <div class="member-detail">
    <!-- 基础资料 -->
    <el-card>
      <div slot="" class="clearfix">
        <span>基础资料</span>
      </div>
      <el-row>
        <el-col :span="3">
          <img class="member-img" :src="'http://localhost:3001/upload/' + form.imgUrl" alt="">
          <p>
            <el-button type="primary" style="padding:12px">编辑资料</el-button>
          </p>
        </el-col>
        <el-col :span="21">
          <el-descriptions title="">
            <el-descriptions-item label="会员姓名">{{form.name}}</el-descriptions-item>
            <el-descriptions-item label="会员手机">{{form.tel}}</el-descriptions-item>
            <el-descriptions-item label="会员卡号">{{form.memberId}}</el-descriptions-item>
            <el-descriptions-item label="会员性别">{{form.gender | genderFormat}}</el-descriptions-item>
            <el-descriptions-item label="会员年龄">{{form.age}}</el-descriptions-item>
            <el-descriptions-item label="微信昵称"></el-descriptions-item>
            <el-descriptions-item label="常用收货人">{{form.address}}</el-descriptions-item>
            <el-descriptions-item label="详细地址">{{form.address}}</el-descriptions-item>
            <el-descriptions-item label="来源方式"></el-descriptions-item>
            <el-descriptions-item label="成为会员时间"></el-descriptions-item>
            <el-descriptions-item label="最近登录时间"></el-descriptions-item>
            <el-descriptions-item label="会员备注"></el-descriptions-item>
          </el-descriptions>
        </el-col>
      </el-row>
    </el-card>
    
    <!-- 会员资产 -->
    <el-card>
      <div class="clearfix">
        <span>会员资产</span>
      </div>
      <el-row>
        <el-col :span="4">
          <p>累计积分</p>
          <p class="col-data">{{ form.score }}</p>
          <el-button type="text">修改积分</el-button>
        </el-col>
        <el-col :span="4">
          <p>累计成长值</p>
          <p class="col-data">{{ form.score }}</p>
          <el-button type="text">修改成长值</el-button>
        </el-col>
        <el-col :span="4">
          <p>付费会员卡</p>
          <p class="col-data">{{ form.payState | payStateFormat}}</p>
          <el-button type="text">查看</el-button>
        </el-col>
        <el-col :span="4">
          <p>会员等级</p>
          <p class="col-data">{{ form.grade | gradeFormat}}</p>
          <el-button type="text">查看</el-button>
        </el-col>
        <el-col :span="4">
          <p>储值卡余额(元)</p>
          <p class="col-data">{{ form.score }}</p>
          <el-button type="text">充值</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
    };
  },
  created() {
    this.form = JSON.parse(JSON.stringify(this.$route.query.memberList));
  },
  filters: {
    genderFormat(gender) {
      if (gender == 0) return "女";
      if (gender == 1) return "男";
      if (gender == 2) return "其他";
    },
    payStateFormat(payState) {
      if (payState == 0) return "否";
      if (payState == 1) return "是";
    },
    gradeFormat(grade){
      if(grade == 1) return '白金会员'
      if(grade == 2) return '水晶会员'
      if(grade == 3) return '钻石贵宾'
    }
  },
  methods: {},
  watch: {
    // $route: {
    //   handler() {
    //     console.log(this.$route);
    //     this.form = JSON.parse(JSON.stringify(this.$route.query.memberList))
    //   },
    //   immediate: true,
    // },
  },
};
</script>
<style lang="scss" scoped>
.member-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.el-form-item {
  margin: 0;
}
.clearfix {
  font-size: 20px;
  margin-bottom: 30px;
}
.col-data {
  margin: 25px 0;
  font-size: 18px;
}
.el-col {
  text-align: center;
}
</style>

