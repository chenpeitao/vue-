<template>
  <div class="login">
    <div class="login-box">
      <h2>登录</h2>
      <form @submit.prevent='sendLogin' autocomplete="off">
        <div><input placeholder="请输入用户名" type="text" name="user" ref="userInput" /></div>
        <div><input placeholder="请输入密码" type="password" name="password" /></div>
        <div class="login-btn"><input type="submit" value="一键登入" /></div>
      </form>
      <div class="back-index">
        <router-link  to="/">首页>>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {}
    },
    methods: {
      sendLogin () {
        // console.log(1)
        // console.log(this)
        // console.log(this.$local)
        let username=this.$refs.userInput.value;
        this.$local.save('userInfo',{
          login:true,
          userName:username
        })
        let redirect=this.$route.query.redirect
        if(!redirect){
          redirect='project'
        }
        this.$router.push({
          path:'/'+redirect
        })
      }
    }
  }
</script>
<style>

</style>
