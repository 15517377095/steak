<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
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
    }
  },
  mounted(){
    this.getLoginUser();
  }
}
</script>

<style src="./assets/css/awesomeFontAll.min.css"></style>
<style src="./assets/css/public.css"></style>