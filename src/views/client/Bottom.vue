<template>
    <div class="container-fluid" id="bottom">
        <div class="row">
            <div class="col-12 col-sm-3 mr-auto pl-sm-5 bottom_link_col">
                <div class="row">
                    <div class="col bottom_links_title">
                        <span>探索</span>
                    </div>
                </div>
                <div class="col bottom_links_hr"></div>
                <div class="row">
                    <div class="col-6 col-sm-12 col-xl-6">
                        <router-link to="/">主页</router-link><br/>
                        <router-link to="/about">关于</router-link><br/>
                        <router-link to="/news">新闻</router-link>
                    </div>
                    <div class="col-6 col-sm-12 col-xl-6">
                        <router-link to="/type/all">游戏</router-link><br/>
                        <router-link to="/type/free">免费游玩</router-link><br/>
                        <router-link to="/type/new">抢先体验</router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-3 mr-auto bottom_link_col">
                <div class="row">
                    <div class="col bottom_links_title">
                        <span>账户</span>
                    </div>
                </div>
                <div class="col bottom_links_hr"></div>
                <div class="row">
                    <div class="col-6 col-sm-12 col-xl-6">
                        <router-link to="/reg">注册账户</router-link>
                    </div>
                    <div class="col-6 col-sm-12 col-xl-6">
                        <router-link to="/shop">购物车</router-link>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-3 pr-sm-5 bottom_link_col">
                <div class="row">
                    <div class="col bottom_links_title">
                        <span>分享</span>
                    </div>
                </div>
                <div class="col bottom_links_hr"></div>
                <div class="row">
                    <div class="col-6 col-sm-12 col-xl-6">
                        <a href="#">微信</a><br/>
                        <a href="#">QQ</a><br/>
                        <a href="#">知乎</a>
                    </div>
                    <div class="col-6 col-sm-12 col-xl-6">
                        <a href="#">YouTube</a><br/>
                        <a href="#">Steam</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col pl-sm-5" id="bottom_logo">
                <img src="../../assets/images/logo.png" width="160px" />
            </div>
        </div>
        <div class="row">
            <div class="col pl-sm-5" id="bottom_message">
                <span>© Copyrights 2019 Steak- All Rights Reserved.商标属于各自的所有者。版权所有。</span>
            </div>
        </div>
    </div>
</template>

<style src="../../assets/css/bottom.css" scoped></style>