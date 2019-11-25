<template>
    <div class="header">
        <div class="container-fluid header-bar">
            <div class="row">
                <div class="col-auto offset-xl-1 header-logo anim-2">
                    <img src="../../assets/images/logo.png" />
                </div>
                <div @click="toggleFull" class="col-auto ml-auto header-ico cur-p mdui-ripple" title="全屏/取消全屏">
                    <i class="fas fa-expand-arrows-alt"></i>
                </div>
                <div class="col-auto header-ico cur-p mdui-ripple" title="安全锁定">
                    <i class="fas fa-unlock-alt"></i>
                </div>
                <div @click="$parent.$parent.loginout" class="col-auto header-ico cur-p mdui-ripple" title="退出">
                    <i class="fas fa-sign-out-alt"></i>
                </div>
                <div class="col-0 col-xl-1" />
            </div>
        </div>
        <div class="container-fluid header-nav">
            <div class="row">
                <div class="col-auto offset-xl-1 nav-item cur-p mdui-ripple">
                    <i class="fas fa-gamepad"></i>
                    <span>游戏管理</span>
                </div>
                <div class="col-auto nav-item cur-p mdui-ripple">
                    <i class="fas fa-users"></i>
                    <span>用户管理</span>
                </div>
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
        
    },
    mounted(){
        this.$parent.$parent.userInterceptor();
    }
}
</script>

<style src="../../assets/adminCss/header.css" scoped></style>