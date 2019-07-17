import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/home'
import Overtime from '@/views/overtime'
import Suspension from '@/views/suspension'
import Detail from '@/views/detail'
import Login from '@/views/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home,
      beforeEnter(to,from,next){
        if(localStorage.token){
          next()
        }else{
          next('/login')
        }
      }
    },
    {
      path:'/overtime',
      component:Overtime
    },
    {
      path:'/suspension',
      component:Suspension
    },
    {
      path:'/detail',
      component:Detail
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
