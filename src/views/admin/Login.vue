<template>
    <div class="login">
        <div class="container-fluid">
            <div class="row pl-4 pr-4">
                <div class="col col-md-auto ml-auto mr-auto login-box anim-2">
                    <img class="login-logo" src="../../assets/images/logo.png" />
                    <span class="login-title">登录到 Steak 后台管理系统</span>
                    <div class="form-group">
                        <label for="exampleInputPassword1">用户名</label>
                        <input type="text" v-model="loginForm.email" class="form-control" id="exampleInputPassword1" placeholder="用户名">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword2">密码</label>
                        <input type="password" v-model="loginForm.password" class="form-control" id="exampleInputPassword2" placeholder="密码">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">记住我</label>
                    </div>
                    <button class="btn btn-primary login-btn mdui-ripple" @click="login">登 入</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mdui from 'mdui/dist/js/mdui.min.js'

export default {
    data(){
        return {
            loginForm:{
                email: null,
                password: null
            }
        }
    },
    methods:{
        login(){
            var usernameReg= /^.{1,20}$/ ;
            var passwordReg= /^.{6,}$/;
            if(!usernameReg.test(this.loginForm.email) || !passwordReg.test(this.loginForm.password)){
                mdui.snackbar({
                    message: '请按提示填写表单',
                    position: 'right-bottom'
                });
                return;
            }
            this.$http({
                methods: 'post',
                params: this.loginForm,
                url: '/api/user/login'
            }).then((response) => {
                if(response.data.permissions == 0){
                    mdui.snackbar({
                        message: '非法登入',
                        position: 'right-bottom'
                    });
                    return;
                }
                if(response.data == 0){
                    mdui.snackbar({
                        message: '账户名或密码不正确',
                        position: 'right-bottom'
                    });
                    return;
                }
                mdui.snackbar({
                    message: '登录成功',
                    position: 'right-bottom'
                });
                this.$router.push({ path: '/admin' });
            })
        }
    }
}
</script>

<style src="../../assets/adminCss/login.css" scoped></style>