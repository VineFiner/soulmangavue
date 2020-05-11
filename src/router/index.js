import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入模块
import mineRouter from './mine'
import adminRuter from './admin'

Vue.use(VueRouter)

  const routes = [
  // 引用模块
  adminRuter,
  mineRouter,
  {
    path: '/*',
    redirect: '/mine'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
