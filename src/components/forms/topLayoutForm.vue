<template>
  <div class="top">
    <el-form :model="formLabelAlign" :label-position="labelPosition" label-width="80px">
      <el-form-item label="名称" class="sty">
        <el-input v-model="formLabelAlign.name" placeholder="" class="inpt"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" class="sty">
        <el-input v-model="formLabelAlign.region" placeholder="" class="inpt"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" class="sty">
        <el-input v-model="formLabelAlign.type" placeholder="" class="inpt"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        name:'',
        region:'',
        type:''
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.sty
  margin-bottom 5px
.inpt
  padding-bottom 0px
</style>
