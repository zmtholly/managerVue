<template>
  <div>
    <input v-model="input" placeholder="Take to do" class="my-input" @keyup.enter="onEnter" />
    <ul class="todolist">
      <li v-for="item in listContents" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      listContents: [
        { content: "What do you think?", isDone: false, id: 1 },
        { content: "Have fun with blue admin", isDone: false, id: 2 },
        { content: "Write email to business cat", isDone: false, id: 3 },
        { content: "Get in touch with jspang team", isDone: false, id: 4 },
        {
          content: "Ei cum soleet appareat,ex est graeci medioc",
          isDone: false,
          id: 5
        },
        { content: "Simaul erroribus ad usu", isDone: false, id: 6 },
        {
          content: "Vim an eius ocurreret abhorreant,id name a",
          isDone: false,
          id: 7
        }
      ]
    };
  },
  methods: {
    onEnter() {
      if(this.input != ''){
        var listContent = {content:this.input,isDone:true};
        this.listContents.splice(0,0,listContent);
        this.input = '';
      }
    } 
  }
};
</script>
<style lang="stylus" scoped>
.my-input
  line-height 28px
  border 1px solid #cccccc
  border-radius 6px
  width 100%
  padding 5px
  box-sizing border-box
.todolist 
  margin-top 5px
  list-style none
  border 1px solid #cccccc
  border-radius 6px
  li 
    transition all 0.5s
    line-height 20px
    padding 10px
    border-bottom 1px solid #cccccc
    cursor pointer
    border-left 5px solid #ff7f50
    text-align left
    &:nth-child(2n) 
      border-left 5px solid #ffa685
    &:hover 
      border-left 30px solid #ff7f50
      background #eeeeee
    &:last-child 
      border-bottom none

</style>
