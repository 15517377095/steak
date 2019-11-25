<template>
    <div class="login">
        <div class="container-fluid">
            <div class="row pl-4 pr-4">
                <div class="col col-md-auto ml-auto mr-auto login-box anim-2">
                    <img class="login-logo" src="../../assets/images/logo.png" />
                    <span class="login-title">登录到 Steak 后台管理系统</span>
                    <div class="form-group">
                        <label for="exampleInputPassword1">用户名</label>
                        <input class="form-control" id="exampleInputPassword1" placeholder="用户名">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword2">密码</label>
                        <input type="password" class="form-control" id="exampleInputPassword2" placeholder="密码">
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">记住我</label>
                    </div>
                    <button type="submit" class="btn btn-primary login-btn mdui-ripple">登 入</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style src="../../assets/adminCss/login.css" scoped></style>