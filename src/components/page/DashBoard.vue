<template>
  <div>
    <v-pageTitle vtitle="DashBoard"></v-pageTitle>
    <div class="clear"></div>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <el-progress type="circle" :percentage="25" :width="80"></el-progress>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <div class="cart-string">
                <span>New Visits</span>
                <span><h2>57,820</h2></span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <el-progress type="circle" :percentage="25" :width="80"></el-progress>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <div class="cart-string">
                <span>New Visits</span>
                <span><h2>57,820</h2></span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <el-progress type="circle" :percentage="25" :width="80"></el-progress>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <div class="cart-string">
                <span>New Visits</span>
                <span><h2>57,820</h2></span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="6">
        <el-card class="box-card">
          <el-row :gutter="6">
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <el-progress type="circle" :percentage="25" :width="80"></el-progress>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12">
              <div class="cart-string">
                <span>New Visits</span>
                <span><h2>57,820</h2></span>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <columnChart></columnChart>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="12">
        <el-card class="box-chart">
          <pieChart></pieChart>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12">
        <el-card class="box-chart">
          <lineChart></lineChart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import vPageTitle from '../common/pageTitle';
import pieChart from '../charts/pieChart';
import lineChart from '../charts/lineChart';
import columnChart from '../charts/columnChart';

export default {
  data() {
    return {

    }
  },
  components:{
    vPageTitle,
    pieChart,
    lineChart,
    columnChart
  }
};
</script>
<style lang="stylus" scoped>
.el-col
  margin-bottom 16px
  text-align center 
  .box-card
    height 110px
    color #777777
    .cart-string
      height 100px
      padding-top 10px
      font-size 1.1rem
  .box-chart
    height 420px
  .box-list
    height auto 
    text-align left       
</style>
