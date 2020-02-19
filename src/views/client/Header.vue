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
                                            <router-link class="navbar_item_title" to="/list" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>游戏</span>
                                            </router-link>
                                            <div class="navbar_item_more dropdown-menu">
                                                <router-link class="dropdown-item mdui-ripple" to="/list/free">免费游玩</router-link>
                                                <router-link class="dropdown-item mdui-ripple" to="/list/new">抢先体验</router-link>
                                                <div class="dropdown-divider"></div>
                                                <div class="dropdown-title">按类型浏览：</div>
                                                <router-link v-for="gameType in gameTypes" :key="gameType.id" class="dropdown-item mdui-ripple" :to="'/list/' + gameType.id">
                                                    {{ gameType.name }}
                                                </router-link>
                                            </div>
                                        </li>
                                        <li>
                                            <router-link class="navbar_item_title" to="/about">
                                                <span>关于</span>
                                            </router-link>
                                        </li>
                                        <li @mouseenter="toggleNavbarItemMore" @mouseleave="toggleNavbarItemMore">
                                            <!-- 未登陆状态 -->
                                            <router-link v-if="$parent.$parent.loginUser == ''" class="navbar_item_title" to="/login" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>登陆</span>
                                            </router-link>
                                            <div v-if="$parent.$parent.loginUser == ''" class="navbar_item_more dropdown-menu">
                                                <router-link class="dropdown-item mdui-ripple" to="/login">登陆Steak账户</router-link>
                                                <router-link class="dropdown-item mdui-ripple" to="/reg">开通新账号</router-link>
                                            </div>
                                            <!-- 登录状态 -->
                                            <router-link to="/shop" v-if="$parent.$parent.loginUser != ''" class="navbar_item_title" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                {{ $parent.$parent.loginUser.email }}
                                            </router-link>
                                            <div v-if="$parent.$parent.loginUser != ''" class="navbar_item_more dropdown-menu">
                                                <router-link class="dropdown-item mdui-ripple" to="/shop">我的购物车</router-link>
                                                <span class="dropdown-item mdui-ripple" @click="$parent.$parent.loginout">登出</span>
                                                <router-link class="dropdown-item mdui-ripple" to="/login">切换用户</router-link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="nav_move_main_bottom_share" class="col-auto d-none d-sm-block ml-auto cur-d">
                                    <a href="#" data-toggle="modal" data-target="#exampleModal">
                                        <span class="share-logo">
                                            <i class="fab fa-qq"></i>
                                        </span>
                                    </a>
                                    <a href="#" data-toggle="modal" data-target="#exampleModal">
                                        <span class="share-logo">
                                            <i class="fab fa-weixin"></i>
                                        </span>
                                    </a>
                                    <a href="#" data-toggle="modal" data-target="#exampleModal">
                                        <span class="share-logo">
                                            <i class="fab fa-youtube"></i>
                                        </span>
                                    </a>
                                </div>
                                <div id="nav_move_main_bottom_menu" class="col-auto d-block d-lg-none">
                                    <i id="nav_move_more_button" class="fas fa-bars" @click="toggleMoreMenu('show')"></i>
                                </div>
                                <div id="nav_move_more_menu" class="nav_move_more_menu_hidden">
                                    <div id="nav_move_more_menu_bg" @click="toggleMoreMenu('hidden')"></div>
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
                                            <div v-if="$parent.$parent.loginUser != ''" class="row nav_move_more_menu_loginusername">
                                                欢迎，{{ $parent.$parent.loginUser.email }}
                                            </div>
                                            <div class="row">
                                                <div id="nav_move_more_menu_items" class="col">
                                                    <router-link to="/" class="row">
                                                        <div class="col-auto font_oswaldlight">我的商店</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </router-link>
                                                    <router-link to="/list" class="row">
                                                        <div class="col-auto font_oswaldlight">游戏</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </router-link>
                                                    <router-link to="/about" class="row">
                                                        <div class="col-auto font_oswaldlight">关于</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </router-link>
                                                    <router-link v-if="$parent.$parent.loginUser != ''" to="/shop" class="row">
                                                        <div class="col-auto font_oswaldlight">购物车</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </router-link>
                                                    <a @click="$parent.$parent.loginout" v-if="$parent.$parent.loginUser != ''" class="row">
                                                        <div class="col-auto font_oswaldlight">登出</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </a>
                                                    <router-link v-if="$parent.$parent.loginUser == ''" to="/login" class="row">
                                                        <div class="col-auto font_oswaldlight">登录</div>
                                                        <div class="col-auto ml-auto font_oswaldlight">
                                                            <i class="fas fa-chevron-right"></i>
                                                        </div>
                                                    </router-link>
                                                </div>
                                            </div>
                                            <div class="row" id="nav_move_more_menu_share">
                                                <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                    <span class="share-logo">
                                                        <i class="fab fa-weixin"></i>
                                                    </span>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                    <span class="share-logo">
                                                        <i class="fab fa-qq"></i>
                                                    </span>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                    <span class="share-logo">
                                                        <i class="fab fa-zhihu"></i>
                                                    </span>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#exampleModal">
                                                    <span class="share-logo">
                                                        <i class="fab fa-youtube"></i>
                                                    </span>
                                                </a>
                                                <a href="#" data-toggle="modal" data-target="#exampleModal">
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
        <!-- 分享模态框 -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">分享 Steak</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                功能开发中 . . .
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import mdui from 'mdui/dist/js/mdui.min.js'
import { mapGetters,mapActions } from 'vuex'

export default {
    data(){
        return{
            navFixedShow: false,
            
        }
    },
    computed: {
        ...mapGetters(['gameTypes'])
    },
    methods: {
        ...mapActions(['getTypes']),
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
            item.stop(true,true);
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
        clearErrorNavItemMore(){
            addEventListener("click",function(){
                $(".navbar_item_more").hide();
            })
        },
        addMouseTX(){
            var a_idx = 0;jQuery(document).ready(function($) {$("body").click(function(e) {var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;var x = e.pageX,y = e.pageY;$i.css({"z-index": 100000000,"top": y - 20,"left": x,"position": "absolute","font-weight": "bold","color": "#ff6651"});$("body").append($i);$i.animate({"top": y - 180,"opacity": 0},1500,function() {$i.remove();});});});
        }
    },
    created(){
        this.getTypes();
    },
    mounted(){
        this.addWinScrollEvent();
        this.clearErrorNavItemMore();
        // this.addMouseTX();
    }
}
</script>

<style src="../../assets/css/header.css" scoped></style>