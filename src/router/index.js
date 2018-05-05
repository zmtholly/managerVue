import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import DashBoard from '@/components/page/DashBoard'
import TodoList from '@/components/page/TodoListPage'
import FormInput from '@/components/page/FormInput';
import FormLayouts from '@/components/page/FormLayouts';
import BasicTables from '@/components/page/BasicTables';

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'/',
          component:DashBoard
        },
        {
          path:'/DashBoard',
          component:DashBoard
        },
        {
          path:'/TodoList',
          component:TodoList
        },
        {
          path:'/FormInput',
          component:FormInput
        },
        {
          path:'/FormLayouts',
          component:FormLayouts
        },
        {
          path:'/BasicTables',
          component:BasicTables
        }
      ]
    }
  ]
})
