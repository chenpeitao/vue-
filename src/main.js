// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/app.css'



Vue.config.productionTip = false

//引入自定义插件
// import Utile from './lib/utils'
// Vue.use(Utile); 

let local={
  save(key,value){
      localStorage.setItem(key,JSON.stringify(value))
  },
  fetch(key){
    if(localStorage.getItem(key)){
      return JSON.parse(localStorage.getItem(key))
    }else{
      return null;
    }
  },
  delete(key){
    localStorage.removeItem(key)
  }
}


let obj={
  install:function(Vue,options){
    Vue.prototype.$local=local

  }
}
Vue.use(obj)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
