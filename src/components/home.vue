<template>
  <div class="main">
    <div class="home-header">
      <img src="../assets/logo.png" alt="">
      <div class="portrait" >
        <router-link  v-if="!isLogin" to="/login" tag="span">登录</router-link>
        <img  v-if="isLogin" src="../assets/portrait.png" alt="">
      </div>

    </div>
    <div class="phrase">
      Vue-project
    </div>
    <div class="btns">
      <router-link to="/workbench" tag="div" class=" trans">工作台</router-link>
      <router-link to="/project" tag="div" class=" trans">我的项目</router-link>
      <router-link to="/doc" tag="div" class=" trans">我的文档</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data(){
      return{
        isLogin:false
      }
    },
    created () {
      let userinfo=this.$local.fetch('userInfo')
      if(userinfo){
        this.isLogin=userinfo.login
      }
    }
  }
</script>
<style>

</style>
