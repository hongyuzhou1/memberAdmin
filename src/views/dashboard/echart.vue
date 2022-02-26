<template>
  <div class="box" ref="box">
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
        categories: [],
        dataList: [],
    };
  },
  computed: {
    options() {
        return {
            title: {
                text: "支付金额(元)",
            },
            tooltip: {},
            xAxis: {
                data: this.categories,
                axisLine:{
                    lineStyle:{
                        color:"#fff"
                    }
                }
            },
            yAxis: [
                {
                axisLabel: {
                    inside: false,
                    color: "#fff"
                }
            },
            ],
            series: [
                {
                    type: "line",
                    smooth:true,
                    data: this.dataList,
                    lineStyle:{
                        color:'#49B5CB',
                        width:6
                    }
                },
                
            ],
        };
    },
  },
  created() {
    setTimeout(() => {
        let data = {
            categories: ["00","02","04","06","08","10", "12","14","16","18","20","22"],
            dataList: [1000, 880, 850, 700, 750, 600, 500,900,800,780,900,950],
        }
        this.categories = data.categories;
        this.dataList = data.dataList;
        this.myChart.hideLoading();
        this.myChart.setOption(this.options);
    }, 1000);
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.box);
    this.myChart.setOption(this.options);
    this.myChart.showLoading();
  }
}
</script>

<style lang="scss" scoped>
.box{
    width:560px;
    height:310px;
    border-radius:15px;
    background-color: #2E61FE;
    padding:10px;
}
</style>