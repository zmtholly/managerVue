<template>
  <el-form :model="formLabelAlign" :label-position="labelPosition" label-width="80px">
    <el-form-item label="名称">
      <el-input v-model="formLabelAlign.name" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-input v-model="formLabelAlign.region" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="formLabelAlign.type" placeholder=""></el-input>
    </el-form-item>
    <el-form-item label="活动人员">
      <el-input v-model="formLabelAlign.user" placeholder=""></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
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

</style>
