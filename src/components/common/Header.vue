<template>
  <div class="header">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="4">
            <div class="logo">
                <span class="logo_prefix">Welcome</span>
                <span class="logo_suffix">Admin</span>
            </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="8">
            <div class="search">
                <el-input size="small" placeholder="Search for...">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="{span:2,offset: 8}">
            <div class="header-right">
                <el-col :span="10">
                    <el-dropdown menu-align="start">
                      <span>
                          <el-badge :value="5" class="item">
                              <i class="el-icon-message"></i>
                          </el-badge>
                      </span>
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>
                              <span class="pop-title">You have meassages!</span>
                          </el-dropdown-item>
                          <el-dropdown-item v-for="dialog in dialogs" :key="dialog.time" divided>
                              <div class="pop-div">
                                  <span class="pop-image">
                                      <img :src="dialog.header" width="50px">
                                  </span>
                                  <span class="pop-content">
                                      {{ dialog.content }}
                                  </span>
                                  <span class="pop-time">
                                      {{ dialog.time }}分钟前
                                  </span>
                              </div>
                          </el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col :span="8">
                    <el-dropdown menu-align="start">
                    <span>
                        <el-badge :value="3" class="item">
                            <i class="el-icon-date"></i>
                        </el-badge>
                    </span>  
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <span class="pop-title">You have new tasks!</span>
                        </el-dropdown-item>
                        <el-dropdown-item v-for="task in tasks" :key="task.id" divided>
                            <div class="task-div">
                                <span class="task-span task-tag">
                                    <el-tag type="danger">紧急</el-tag>
                                    <el-tag type="warning">重要</el-tag>
                                    <el-tag type="success">正常</el-tag>
                                </span>
                                <span class="task-span task-content">
                                    {{ task.content }}<br>
                                    <span class="task-time">截止：{{ task.overTime }}</span>
                                </span>
                                <span class="task-span task-btn">
                                    <el-button type="primary" size="mini">完成</el-button>
                                </span>
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="2">
            <div class="user-header">
                <el-dropdown trigger="click" menu-align="start">
                    <img src="../../../static/images/b_header.jpg" width="50px" />
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item >
                            <div class="setting-div">
                                <span class="setting-icon"><i class="material-icons">account_box</i></span> 
                                <span class="setting-string"> Profile  个人</span>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <div class="setting-div">
                                <span class="setting-icon"><i class="material-icons">settings</i></span> 
                                <span class="setting-string"> Settings  设置</span>
                            </div>
                         
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <div class="setting-div">
                                <span class="setting-icon"><i class="material-icons">assignment_return</i></span> 
                                <span class="setting-string"> Sign out  退出</span>
                            </div>              
                        </el-dropdown-item>                   
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
    data(){
        return{
            name:'message',
            dialogs:[
                {header:'../../../static/images/b_header.jpg',content:'我有一个Style样式需要您帮忙处理以下。',time:'3'},
                {header:'../../../static/images/b_header3.jpg',content:'中午一起吃个饭吧，我请客。',time:'15'},
                {header:'../../../static/images/b_header.jpg',content:'需要处理一下POP展示的白边样式。',time:'18'},
                {header:'../../../static/images/b_header2.jpg',content:'下午3点开需求会议，准时参加。',time:'24'},
                {header:'../../../static/images/b_header3.jpg',content:'晚上我开车送你回家，你请我吃晚饭。',time:'45'}
            ],
            tasks:[
                {id:1,rank:1,content:'完成JSPangAdmin头部头部组件的编写。',overTime:'2017/3/9'},
                {id:2,rank:2,content:'完成GitHub仓库的初始化工作。',overTime:'2017/3/15'},
                {id:3,rank:3,content:'在阿里云进行网站备案，完成后通知组长。',overTime:'2017/3/20'}
            ]
        }
    },
    methods:{

    }
};
</script>
<style lang="stylus" scoped>
.header 
    position fixed
    width 100%
    height 66px
    font-size 14px
    line-height 66px
    box-sizing border-box
    background #3a8ee6
    box-shadow 2px 0 3px rgba(0, 0, 0, 0.5)
    padding 0 30px
    overflow hidden
    .logo
        float left
        cursor pointer
        font-size 22px
        .logo_prefix
            color #ffffff
        .logo_suffix
            color #ffffff
    .search
        float left 
        color #ffffff
        font-size 14px  
    .header-right
        padding-top 25px
        line-height 10px
        span 
            display inline-block
            margin-left 14px
            font-size 18px
            color #ffffff
            line-height 1px
            height 18px
            cursor pointer
            &:hover
                color #f56c6c
        .pop-title
            font-size 12px
            color #209e91
        .pop-div
            height 55px
            clear both
            .pop-image
                display block
                float left 
                img 
                    border-radius 50%
            .pop-content
                display block
                font-size 12px
                line-height 14px
                padding-top 15px
                margin-left 60px
            .pop-time   
                display block 
                float right 
                font-size 10px
                color #cccccc   
        .task-div
            clear both
            height 55px 
            .task-span
                display block 
                float left
                font-size 12px 
                .task-time
                    clear both
                    float right 
                    color #cccccc 
            .task-content
                width 160px
                line-height 16px
                margin-left 10px
                padding 5px
            
    .user-header
        line-height 10px
        padding-top 7px
        font-size 12px
        img 
            border-radius 50%
            cursor pointer
            .setting-div
                height 30px
                line-height 30px
                clear both
                span 
                    display block 
                    float left
                    font-size 12px
                .setting-icon
                    padding-top 3px
                    padding-right 3px    
</style>

