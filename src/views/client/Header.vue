<template>
    <div id="header">
        <div class="container-fluid" id="nav_move">
            <div class="row">
                <div id="nav_move_before" class="col-auto d-none d-lg-block ml-auto pl-0 pr-0 trTriangle"></div>
                <div id="nav_move_main" class="col-12 col-lg-10">
                    <div class="row">
                        <div id="nav_move_main_logo" class="col-auto d-none d-lg-block br">
                            <img src="../../assets/images/logo.png" width="200px" />
                        </div>
                        <div class="col">
                            <div id="nav_move_main_top" class="row bb">
                                <div class="col-auto d-none d-sm-block">
                                    <span class="cur-d">Welcome to steak</span>
                                </div>
                                <div id="nav_move_main_top_right" class="col-auto ml-auto">
                                    <span class="contact_link_title cur-d">phone: </span><a href="tel:155-1737-7095" class="contact_link">155 1737 7095</a>
                                    <span class="space-20"></span>
                                    <span class="contact_link_title cur-d">email: </span><a href="mailto:jlyang1999@163.com" class="contact_link">jlyang1999@163.com</a>
                                </div>
                            </div>
                            <div id="nav_move_main_bottom" class="row">
                                <div id="nav_move_main_bottom_smalllogo" class="col-auto d-lg-none mr-auto">
                                    <img src="../../assets/images/logo.png" width="140px" />
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <ul id="nav_move_main_bottom_navbar">
                                        <li>
                                            <router-link class="navbar_item_title" to="/">
                                                <span>您的商店</span>
                                            </router-link>
                                        </li>
                                        <li @mouseenter="toggleNavbarItemMore" @mouseleave="toggleNavbarItemMore">
                                            <router-link class="navbar_item_title" to="/type/all" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>游戏</span>
                                            </router-link>
                                            <div class="navbar_item_more dropdown-menu">
                                                <router-link class="dropdown-item" to="/type/free">免费游玩</router-link>
                                                <router-link class="dropdown-item" to="/type/new">抢先体验</router-link>
                                                <div class="dropdown-divider"></div>
                                                <div class="dropdown-title">按类型浏览：</div>
                                                <router-link v-for="gameType in gameTypes" :key="gameType.id" class="dropdown-item" :to="'/type/' + gameType.id">
                                                    {{ gameType.name }}
                                                </router-link>
                                            </div>
                                        </li>
                                        <li @mouseenter="toggleNavbarItemMore" @mouseleave="toggleNavbarItemMore">
                                            <a class="navbar_item_title" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>新闻</span>
                                            </a>
                                            <div class="navbar_item_more dropdown-menu">
                                                <!-- [jsp数据]新闻 -->
                                                <a class="dropdown-item" href="#">[jsp数据]新闻列表</a>
                                            </div>
                                        </li>
                                        <li>
                                            <router-link class="navbar_item_title" to="/about">
                                                <span>关于</span>
                                            </router-link>
                                        </li>
                                        <li @mouseenter="toggleNavbarItemMore" @mouseleave="toggleNavbarItemMore">
                                            <!-- 未登陆状态 -->
                                            <router-link v-if="loginUser == ''" class="navbar_item_title" to="/login" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>登陆</span>
                                            </router-link>
                                            <div v-if="loginUser == ''" class="navbar_item_more dropdown-menu">
                                                <router-link class="dropdown-item" to="/login">登陆Steak账户</router-link>
                                                <router-link class="dropdown-item" to="/reg">开通新账号</router-link>
                                            </div>
                                            <!-- 登录状态 -->
                                            <a v-if="loginUser != ''" class="navbar_item_title" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>我的</span>
                                            </a>
                                            <div v-if="loginUser != ''" class="navbar_item_more dropdown-menu">
                                                <a class="dropdown-item">欢迎，</a>
                                                <router-link class="dropdown-item" to="/shop">我的购物车</router-link>
                                                <router-link class="dropdown-item" to="/logout">登出</router-link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="nav_move_main_bottom_share" class="col-auto d-none d-sm-block ml-auto cur-d">
                                    <a href="#">
                                        <span class="share-logo">
                                            <i class="fab fa-qq"></i>
                                        </span>
                                    </a>
                                    <a href="#">
                                        <span class="share-logo">
                                            <i class="fab fa-weixin"></i>
                                        </span>
                                    </a>
                                    <a href="#">
                                        <span class="share-logo">
                                            <i class="fab fa-youtube"></i>
                                        </span>
                                    </a>
                                </div>
                                <div id="nav_move_main_bottom_menu" class="col-auto d-block d-lg-none">
                                    <i id="nav_move_more_button" class="fas fa-bars" @click="toggleMoreMenu('show')"></i>
                                </div>
                                <div id="nav_move_more_menu" class="nav_move_more_menu_hidden">
                                    <div id="nav_move_more_menu_bg"></div>
                                    <div id="nav_move_more_menu_content">
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div id="nav_move_more_menu_close" class="col" @click="toggleMoreMenu('hidden')">
                                                    <i class="fas fa-times cur-p"></i>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div id="nav_move_more_menu_logo" class="col">
                                                    <img src="../../assets/images/logo.png" width="190px" />
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div id="nav_move_more_menu_items" class="col">
                                                    <a href="#" class="row">
                                                        <div class="col-auto font_oswaldlight">我的商店</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </a>
                                                    <a href="#" class="row">
                                                        <div class="col-auto font_oswaldlight">游戏</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </a>
                                                    <a href="#" class="row">
                                                        <div class="col-auto font_oswaldlight">硬件</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </a>
                                                    <a href="#" class="row">
                                                        <div class="col-auto font_oswaldlight">新闻</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </a>
                                                    <a href="#" class="row">
                                                        <div class="col-auto font_oswaldlight">关于</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="row" id="nav_move_more_menu_share">
                                                <a href="#">
                                                    <span class="share-logo">
                                                        <i class="fab fa-weixin"></i>
                                                    </span>
                                                </a>
                                                <a href="#">
                                                    <span class="share-logo">
                                                        <i class="fab fa-qq"></i>
                                                    </span>
                                                </a>
                                                <a href="#">
                                                    <span class="share-logo">
                                                        <i class="fab fa-zhihu"></i>
                                                    </span>
                                                </a>
                                                <a href="#">
                                                    <span class="share-logo">
                                                        <i class="fab fa-youtube"></i>
                                                    </span>
                                                </a>
                                                <a href="#">
                                                    <span class="share-logo">
                                                        <i class="fab fa-steam-symbol"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="nav_move_after" class="col-auto d-none d-lg-block mr-auto pl-0 pr-0 tlTriangle"></div>
            </div>
        </div>
        <div class="container-fluid" id="nav_fixed" v-show="navFixedShow">
            <div class="row">
                <div class="col-auto">
                    <img id="nav_fixed_logo" src="../../assets/images/logo.png" width="116px" />
                </div>
                <div class="col-auto ml-auto">
                    <a href="#"><i class="fas fa-shopping-cart" id="nav_fixed_shop"></i></a>
                </div>
                <div class="col-auto">
                    <i class="fas fa-bars" id="nav_fixed_more_button" @click="toggleMoreMenu('show')"></i>
                </div>
            </div>
        </div>
        <div style="height:1000px;width:50px" />
    </div>
</template>

<script>
export default {
    data(){
        return{
            navFixedShow: false,
            loginUser: '',
            gameTypes: []
        }
    },
    methods:{
        toggleNavbarItemMore(){
            var item=$(event.target);
            var more=item.find(".navbar_item_more");
            if(more.hasClass("show")){
                more.hide();
                more.removeClass("show");
                return;
            }
            var posiX=item.position().left+12;
            item.find(".navbar_item_more").css("transform","translate3d("+posiX+"px,68px,0px)");
            item.find(".navbar_item_more").css({
                "x-placement":"bottom-start",
                "top":0,
                "left":0,
                "will-change":"transform",
                "position":"absolute"
            });
            more.show(200);
            more.addClass("show");
        },
        toggleMoreMenu(type){
            var item=$("#nav_move_more_menu");
            if(type == "show"){
                item.switchClass("nav_move_more_menu_hidden","nav_move_more_menu_show",800);
            }else{
                item.switchClass("nav_move_more_menu_show","nav_move_more_menu_hidden",200);
            }
            if($(window).scrollTop()>120){
                var navFixed=$("#nav_fixed");
                navFixed.toggle("blind",200);
            }
        },
        addWinScrollEvent(){
            var _this=this;
            addEventListener("scroll",function(){
                var item=$("#nav_move_more_menu");
                if($(window).scrollTop()>120 && item.hasClass("nav_move_more_menu_hidden")){
                    _this.navFixedShow=true;
                }else{
                    _this.navFixedShow=false;
                }
                if(item.hasClass("nav_move_more_menu_show") && $(window).scrollTop()<=120 && $(document.body).width()>992){
                    item.switchClass("nav_move_more_menu_show","nav_move_more_menu_hidden",50);
                }
            })
        },
        getGameTypes(){
            this.$http({
                methods: 'post',
                url: '/api/type/getAll'
            }).then((response) => {
                this.gameTypes=response.data
            })
        }
    },
    mounted(){
        this.addWinScrollEvent();
        this.getGameTypes();
    }
}
</script>

<style src="../../assets/css/header.css" scoped></style>