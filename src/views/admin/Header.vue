<template>
    <div class="header">
        <div class="container-fluid header-bar">
            <div class="row">
                <div class="col-auto offset-xl-1 header-logo anim-2">
                    <img src="../../assets/images/logo.png" />
                </div>
                <div @click="closeTooltip(1);$parent.$parent.loginout()" id="tooltip1" class="col-auto ml-auto header-ico cur-p mdui-ripple" mdui-tooltip="{content: '退出', delay: 400}">
                    <i class="fas fa-sign-out-alt"></i>
                </div>
                <div @click="closeTooltip(2);lock()" id="tooltip2" class="col-auto header-ico cur-p mdui-ripple" mdui-tooltip="{content: '安全锁定', delay: 400}">
                    <i class="fas fa-unlock-alt"></i>
                </div>
                <div @click="closeTooltip(3);toggleFull()" id="tooltip3" class="col-auto d-none d-lg-block header-ico cur-p mdui-ripple" mdui-tooltip="{content: '全屏/取消全屏', delay: 400}">
                    <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="col-0 col-xl-1" />
            </div>
        </div>
        <div class="container-fluid header-nav">
            <div class="row">
                <div class="col-auto offset-xl-1 nav-item cur-p mdui-ripple" mdui-menu="{target: '#menu1'}">
                    <i class="fas fa-gamepad"></i>
                    <span>游戏管理</span>
                </div>

                <ul class="mdui-menu" id="menu1">
                    <li class="mdui-menu-item">
                        <router-link to="/admin/gameManage" class="mdui-ripple">游戏管理</router-link>
                    </li>
                    <li class="mdui-menu-item">
                        <router-link to="/admin/addGame" class="mdui-ripple">添加游戏</router-link>
                    </li>
                </ul>

                <router-link to="/admin/userManage" class="col-auto nav-item cur-p mdui-ripple">
                    <i class="fas fa-users"></i>
                    <span>用户管理</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import mdui from 'mdui/dist/js/mdui.min.js'

export default {
    methods:{
        fullscreen(){
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            } else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            } else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            } else if (docElm.msRequestFullscreen) {
                docElm.msRequestFullscreen();
            }
        },
        exitFullscreen(){
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        },
        toggleFull(){
            if(window.outerHeight === screen.availHeight && window.outerWidth === screen.availWidth){
                this.fullscreen();
                return;
            }
            this.exitFullscreen();
        },
        lock(){
            window.sessionStorage["lockUsername"] = this.$parent.$parent.loginUser.email;
            this.$router.push("/admin/login");
        },
        closeTooltip(id){
            mdui.Tooltip('#tooltip' + id).close();
        }
    },
    mounted(){
        this.$parent.$parent.userInterceptor();
    }
}
</script>

<style src="../../assets/adminCss/header.css" scoped></style>