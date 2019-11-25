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
        })
    }
  },
  mounted(){
    this.getLoginUser();
  }
}
</script>

<style src="./assets/css/awesomeFontAll.min.css"></style>
<style src="./assets/css/public.css"></style>