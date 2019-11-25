<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import mdui from 'mdui/dist/js/mdui.min.js'

export default {
  data(){
    return {
      loginUser: ''
    }
  },
  methods:{
    getLoginUser(){
      this.$http({
        methods: 'post',
        url: '/api/user/getLoginUser'
      }).then((response) => {
        this.loginUser = response.data;
      })
    },
    loginout(){
        this.$http({
            methods: 'post',
            url: '/api/user/logout'
        }).then((response) => {
            mdui.snackbar({
                message: '账户已退出',
                position: 'right-bottom'
            });
            this.loginUser = '';
            if(this.$route.path == '/shop'){  //如果是在购物车页面就跳到登录
              this.$router.push({path:"/login"});
            }
            if(this.$route.path.indexOf("/admin") != -1){
              this.$router.push({path:"/admin/login"});
            }
        })
    },
    userInterceptor(){  //后台用户拦截
      this.$http({
        methods: 'post',
        url: '/api/user/getLoginUser'
      }).then((response) => {
        this.loginUser = response.data;
        if(this.loginUser == '' || this.loginUser.permissions == 0){
          mdui.snackbar({
            message: '非法接入',
            position: 'right-bottom'
          });
          this.$router.push({path:"/admin/login"});
        }
      })
    }
  },
  mounted(){
    this.getLoginUser();
  },
  watch:{
    $router(from,to){
      this.userInterceptor();
    }
  }
}
</script>

<style src="./assets/css/awesomeFontAll.min.css"></style>
<style src="./assets/css/public.css"></style>