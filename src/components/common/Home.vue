<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div> 
  </div>
</template>
<script>
import vHead from './Header'
import vSidebar from './Aside'
export default {
  components:{
      vHead,
      vSidebar
  }
}
</script>
<style lang="stylus" scoped>
.content
  background none repeat scroll 0 0 #f0f3f4
  position absolute
  left 200px
  right 0
  top 66px
  bottom 0
  width auto 
  padding 25px 40px
  box-sizing border-box
  overflow-y scroll 
 </style>
