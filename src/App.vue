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
        url: '/user/getLoginUser'
      }).then((response) => {
        this.loginUser = response.data;
      })
    },
    loginout(){
        this.$http({
            methods: 'post',
            url: '/user/logout'
        }).then((response) => {
            mdui.snackbar({
                message: '账户已退出',
                position: 'right-bottom'
            });
            this.loginUser = '';
            if(window.sessionStorage["lockUsername"]){
              window.sessionStorage.removeItem("lockUsername");
            }
            if(this.$route.path == '/shop'){  //如果是在购物车页面就跳到登录
              this.$router.push({path:"/login"});
              return;
            }
            if(this.$route.path.indexOf("/admin") != -1){
              if(this.$route.path == "/admin/login"){
                location.reload()
                return;
              }
              this.$router.push({path:"/admin/login"});
            }
        })
    },
    userInterceptor(){  // 后台用户拦截
      if(this.$route.path.indexOf("/admin") == -1){  // 仅在后台拦截
        return;
      }
      // 未登录/权限不足 拦截
      this.$http({
        methods: 'post',
        url: '/user/getLoginUser'
      }).then((response) => {
        this.loginUser = response.data;
        if(this.loginUser == '' || this.loginUser.permissions == 0){
          mdui.snackbar({
            message: '非法接入',
            position: 'right-bottom'
          });
          this.$router.push({path:"/admin/login"});
          return;
        }
      })
      // 已锁定状态 拦截
      if(this.$route.path != "/admin/login" && window.sessionStorage["lockUsername"]){
         mdui.snackbar({
          message: '非法接入',
          position: 'right-bottom'
        });
        this.$router.push({path:"/admin/login"});
        return;
      }
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