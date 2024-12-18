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
          path:'category/:id',
          component:Category
        }
      ]
    },
    {
      path:'/Login',
      component:Login
    }
  ],
  scrollBehavior () {
    return { top:0 }
  }
  // 切页时滚动条自动回到顶部
})

export default router
