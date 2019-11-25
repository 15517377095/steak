<template>
    <div class="login">
        <Header />
        <div class="container-fluid" id="all">
            <div class="row">
                <div class="col-10 offset-lg-1">
                    <div class="from-title">我的帐户</div>
                </div>
            </div>
            <div class="row pl-3 pr-3">
                <div class="col-12 col-lg-7 offset-lg-1 login-form-box">
                    <div class="row">
                        <div class="col-md-6 paddforbtn">
                            <div class="title">登录</div>
                            <div class="title-s">到现有的 steak 帐户</div>
                            <div class="mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">steak 帐户名称</label>
                                <input v-model="loginForm.email" class="mdui-textfield-input" type="email" required/>
                                <div class="mdui-textfield-error">用户名不能为空</div>
                            </div>
                            <div class="mdui-textfield mdui-textfield-floating-label">
                                <label class="mdui-textfield-label">密码</label>
                                <input v-model="loginForm.password" class="mdui-textfield-input" type="password" pattern="^.*(?=.{6,}).*$" required/>
                                <div class="mdui-textfield-error">密码至少 6 位</div>
                            </div>
                            <button class="sub-btn mdui-ripple" @click="loginUser">登录</button>
                        </div>
                        <div class="col-hr" />
                        <div class="col-md-6">
                            <div class="title">创建</div>
                            <div class="title-s">一个新的免费帐户</div>
                            <p class="create-info">欢迎免费加入及轻松使用。继续创建 Steak 帐户并获取 Steak - 适合 PC 和 Mac 玩家的前沿数字解决方案。</p>
                            <router-link to="/reg" class="sub-btn mdui-ripple">加入 Steak</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-3 why-box">
                    <div class="why-title">为什么加入 STEAK？</div>
                    <ul class="why-ul">
                        <li>购买和下载完整零售游戏</li>
                        <li>加入 Steak 社区</li>
                        <li>游戏时与好友聊天</li>
                        <li>在任何电脑上都能玩</li>
                        <li>安排游戏、比赛或 LAN 聚会</li>
                        <li>获取自动游戏更新以及更多！</li>
                    </ul>
                    <img class="why-img" src="../../assets/images/why_join_preview.png" />
                </div>
            </div>
        </div>
        <Bottom />
    </div>
</template>

<script>
import Header from './Header'
import Bottom from './Bottom'
import mdui from 'mdui/dist/js/mdui.min.js'

export default {
    components: {
        Header,
        Bottom
    },
    data(){
        return {
            loginForm:{
                email: null,
                password: null
            }
        }
    },
    methods: {
        mousemoveFun(){
            var winWidth=window.innerWidth;
            var mouseX=event.clientX;
            var marginLeft=(window.innerWidth/2-mouseX)/40;
            $("#all").css("margin-left",marginLeft);
            var winHeight=window.innerHeight;
            var mouseY=event.clientY;
            var paddingTop=140+(window.innerHeight/2-mouseY)/40;
            $("#all").css("padding-top",paddingTop);
        },
        loginUser(){
            var emailReg= /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ ;
            var passwordReg= /^.{6,}$/;
            if(!emailReg.test(this.loginForm.email) || !passwordReg.test(this.loginForm.password)){
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
                if(response.data.permissions == 1){
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
                this.$router.push({ path: '/' });
                location.reload();  //刷新页面重载Header
            })
        }
    },
    mounted(){
        addEventListener("mousemove",this.mousemoveFun);
        $("html,body").animate({scrollTop:0},100); 
    },
    beforeDestroy(){    // 销毁前移除(destroyed、beforeDestroy均可实现)
        removeEventListener("mousemove",this.mousemoveFun);
    }
}
</script>

<style src="../../assets/css/login.css" scoped></style>