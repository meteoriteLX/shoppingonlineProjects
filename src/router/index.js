import { createRouter, createWebHashHistory } from 'vue-router'
import Login from'@/views/Login/index.vue'
import Layout from'@/views/Layout/index.vue'
import Home from'@/views/Home/index.vue'
import Category from'@/views/Category/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes:[
    {
      path:'/',
      component:Layout,
      children:[
        {
          // 默认二级路由
          path:'',
          component:Home 
        },
        {
          path:'category',
          component:Category
        }
      ]
    },
    {
      path:'/Login',
      component:Login
    }
  ]
})

export default router
