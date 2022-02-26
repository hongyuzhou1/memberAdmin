<template>
  <div class="memberSearch">
    <router-view></router-view>
    <!-- 条件查询模块 -->
    <condition-select @send="selectResult"></condition-select>
    <el-card>
      <div slot="header" class="clearfix">
        <span>会员列表</span>
        <el-button style="float: right; padding: 5px 5px">批量操作</el-button>
        <el-button
          style="float: right; padding: 5px 5px; margin: 0 10px"
          type="primary"
          @click="changeWindowState('add')"
          >+ 新建</el-button
        >
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="info" label="会员信息" width="130px">
          <template v-slot="scope">
            <el-row>
              <el-col :span="12">
                <img
                  class="member-image"
                  :src="'http://localhost:3001/upload/' + scope.row.imgUrl"
                  alt=""
                />
              </el-col>
              <el-col :span="12">
                <p class="user-name">{{ scope.row.name }}</p>
                <p>{{ scope.row.tel }}</p>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column prop="grade" label="会员等级">
          <template v-slot="scope">
            {{scope.row.grade | gradeFormat}}
          </template>
        </el-table-column>
        <el-table-column prop="label" label="会员标签" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="score" label="积分"> </el-table-column>
        <el-table-column prop="orderNumber" label="下单次数"> </el-table-column>
        <el-table-column prop="orderAmount" label="下单金额"> </el-table-column>
        <el-table-column prop="payState" label="付费会员">
          <template v-slot="scope">
            {{ scope.row.payState | payStateFormat }}
          </template>
        </el-table-column>
        <el-table-column prop="mony" label="卡内余额"> </el-table-column>
        <el-table-column label="操作" width="200px" fixed="right">
          <template v-slot="scope">
            <el-button type="text" @click="goMemberDetail(scope.row)">会员详情</el-button>
            <el-button type="text" @click="changeAddMonyState(scope.row)">充值</el-button>
            <el-button type="text" @click="changeScore(scope.row)"
              >修改积分</el-button
            >
            <!-- <el-button type="text"  @click="changeScoreWindowState(scope.row)">修改积分</el-button> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        background
        layout="prev,pager,next"
        :total="total"
        :page-size="5"
        :current-page="page"
        @current-change="currentChange"
      >

      </el-pagination>
    </el-card>
    <!-- 新建会员弹窗 -->
    <add-member v-if="addMemberShow" @closeWindow="changeWindowState($event)"></add-member>
    <!-- 修改分数弹窗 -->
    <change-score
      v-if="changeScoreShow"
      :rule-form="scoreObject"
      @changeEditScoreState="changeScore"
    ></change-score>
    <!-- 充值弹窗 -->
    <add-mony v-if="addMonyShow" @changeAddMonyState="changeAddMonyState" :rule-form="monyObject"></add-mony>
  </div>
</template>
<script>
import { selectMember } from "@/api/http.js";
import addMember from "./addMember.vue";
import changeScore from "./changeScore.vue";
import addMony from "./memberSearchCom/addMony.vue"
// 条件查找模块
import conditionSelect from "./memberSearchCom/conditionSelect.vue";
export default {
  components: {
    addMember,
    changeScore,
    conditionSelect,
    addMony
  },
  data() {
    return {
      tableData: [],
      addMemberShow: false,
      changeScoreShow: false,
      addMonyShow:false,
      page: 1,
      total: 0,
      scoreObject:{},
      monyObject:{}
    };
  },
  created() {
    this.getData(1);
  },
  // 自定义过滤器
  filters: {
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
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async getData(page) {
      try {
        let res = await selectMember({ page: this.page });
        let { code, list, total } = res.data;
        if (code === 0) {
          // this.tableData = list;
          this.allData = list;
          this.currentChange(page)
          this.total = total;
          this.page = page;
        }
      } catch (err) {
        console.log(err);
      }
    },
    // 切换新建弹窗状态
    changeWindowState(type) {
      this.addMemberShow = !this.addMemberShow;
      if(type === 'add' || type === 'close'){
        this.getData(this.page)
      }if(type === 'success'){
        this.getData(1)
      }
    },
    // 修改积分
    changeScore(row) {
      this.getData(this.page);
      this.changeScoreShow = !this.changeScoreShow;
      this.scoreObject = JSON.parse(JSON.stringify(row));
    },
    // 切换页码时
    currentChange(page){
      this.page = page;
      let start = (page - 1 ) * 5;
      let end = page * 5;
      this.tableData = this.allData.slice(start,end)
    },
    // 条件查询结果
    selectResult(data){
      this.tableData = data
    },
    // 跳转会员详情
    goMemberDetail(row){
      this.$router.push({
        path:'/memberAdmin/memberDetail',
        query:{
          memberList:JSON.parse(JSON.stringify(row)),
          id:9
        }
      })
    },
    //改变充值弹窗状态
    changeAddMonyState(row){
      this.addMonyShow = !this.addMonyShow
      this.monyObject = JSON.parse(JSON.stringify(row));
      this.getData(this.page)
    }
  },
  watch:{
    tableData(){
      this.tableData = this.tableData
    }
  }
};
</script>
<style lang="scss" scoped>
.memberSearch{
  position:relative;
}
::v-deep .el-card__header {
  line-height: 26px;
}
.user-name {
  color: #409eff;
}
.member-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>