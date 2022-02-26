import Vue from 'vue'
import VueRouter from 'vue-router';
import asyncRoutes from './asyncRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  ...asyncRoutes,
  {
    path:'/login',
    name:'login',
    component:() => import('../views/login'),
    meta:{
      title:"登录"
    }
  }
]
const router = new VueRouter({
  base:process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  document.title = to.meta.title
  let token = sessionStorage.getItem("token")
  if(to.fullPath === '/login'){
    next()
  }
  else{
    if(token){
      next()
    }else{
      next("/login")
    }
  }
})
export default router
