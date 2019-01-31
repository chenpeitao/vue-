import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Layout from '@/views/layout'
import Project from '@/views/backend/project'
import Workbench from '@/views/backend/workbench'
import Doc from '@/views/backend/doc.vue'
import Login from '@/components/login'

Vue.use(Router)

let router= new Router({
  mode:"history",
  linkActiveClass:'is-active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/management',
      component: Layout,
      children:[
        {
          path:'/project',
          name:'Project',
          component:Project,
          meta:{
            login:true
          }
        },
        {
          path:'/workbench',
          name:'Workbench',
          component:Workbench,
          meta:{
            login:true
          }
        },
        {
          path:'/doc',
          name:'Doc',
          component:Doc,
          meta:{
            login:false
          }
        }

      ]
    },
    {
      path: '*',
      redirect:'/'
    },
  ]
})

router.beforeEach((to, from, next) => {
  let bl = to.matched.some(function(item){
    return item.meta.login
  })
  // console.log(bl)
  if(bl){
    let info=router.app.$local.fetch('userInfo')
    // console.log(info)
    // console.log(info)
    if(info){
      next()
    }else{
      router.push({
        path:'/login',
        query:{
          redirect:to.path.slice(1)
        }        
      })
    }

  }else{
    next() 
  }
  // next();
})

export default router
